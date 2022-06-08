import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, DatePicker, PageHeader } from "antd";
import PatientEcgComponent from "../../ecg";
import { patientService } from "../../../services/patient";
import { ecgService } from "../../../services/ecg";
import LoadingComponent from "../../loading";
import moment from "moment";

const { RangePicker } = DatePicker;

const PatientEcg = () => {
  let history = useHistory();
  let { id } = useParams();
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(true);
  const [showECG, setShowECG] = useState([]);
  const [showECGTemp, setShowECGTemp] = useState([]);

  useEffect(() => {
    patientService.showPatient(id).then((response) => {
      setForm({ ...response });
    });

    ecgService.showRecordECGs(id).then((response) => {
      if (response !== undefined) {
        setShowECG([...response]);
        setShowECGTemp([...response]);
      }
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });
  }, [id]);

  const formatDate = (date, format) => {
    return moment(date).format(format);
  };

  const filterDate = (date) => {
    let response = [...showECGTemp];
    if (![undefined, null, ""].includes(date)) {
      const startDate = moment(date[0]).format("YYYY-MM-DD");
      const endDate = moment(date[1]).format("YYYY-MM-DD");
      response = showECGTemp.filter((item) => {
        return (
          formatDate(item.readDate, "YYYY-MM-DD") >= startDate &&
          formatDate(item.readDate, "YYYY-MM-DD") <= endDate
        );
      });
    }

    setShowECG([...response]);
  };

  return (
    <div>
      {!loading ? (
        <div>
          <PageHeader
            onBack={() => history.push(`/`)}
            title={`${form.nombre} ${form.apellidoP} ${form.apellidoM}`}
          />
          <div>
            <div>
              <div style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "13px",
                    marginBottom: "10px",
                  }}
                >
                  Buscar:
                </div>
                <div>
                  <RangePicker
                    placeholder={["Fecha inicio", "Fecha fin"]}
                    onChange={(e) => filterDate(e)}
                  />
                </div>
              </div>
              <div>
                {showECG.map((item, index) => {
                  return (
                    <div
                      style={{ marginBottom: "30px", fontWeight: "bold" }}
                      key={index}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "baseline",
                        }}
                      >
                        <div>
                          <h2>
                            Resultado:{" "}
                            {`${item.data[0].result} - ${formatDate(
                              item.readDate,
                              "DD/MM/YYYY hh:mm:ss"
                            )}`}
                          </h2>
                        </div>
                        <div>
                          <Button
                            type="link"
                            onClick={() =>
                              history.push(`/paciente/${id}/ecg/detalle/${index}`)
                            }
                          >
                            Ver Detalle
                          </Button>
                        </div>
                      </div>
                      <PatientEcgComponent
                        key={index}
                        id={item.id}
                        dataPoints={item.data[0].dataECG}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
};

export default PatientEcg;
