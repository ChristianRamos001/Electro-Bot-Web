import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { PageHeader } from "antd";
import PatientEcgComponent from "../../ecg";
import { patientService } from "../../../services/patient";
import { ecgService } from "../../../services/ecg";
import LoadingComponent from "../../loading";
import moment from "moment";

const PatientEcgDetails = () => {
  let history = useHistory();
  let { id, idDetail } = useParams();
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(true);
  const [showECG, setShowECG] = useState({});

  useEffect(() => {
    patientService.showPatient(id).then((response) => {
      if (response !== undefined) {
        setForm({ ...response });
      }
    });

    ecgService.showRecordECGs(id).then((response) => {
      if (response !== undefined) {
        setShowECG({ ...response[idDetail] });
      }

      setTimeout(() => {
        setLoading(false);
      }, 500);
    });
  }, [id, idDetail]);

  const formatDate = (date, format) => {
    return moment(date).format(format);
  };

  console.log("showECG: ", showECG.data);

  return (
    <div>
      {!loading ? (
        <div>
          <PageHeader
            onBack={() => history.push(`/paciente/${id}/ecg`)}
            title={`Historial de ${form.nombre} ${form.apellidoP} ${form.apellidoM}`}
          />
          <div>
            <div>
              <div>
                <div style={{ marginBottom: "30px", fontWeight: "bold" }}>
                  <h2>
                    Fecha:{" "}
                    {`${formatDate(showECG.readDate, "DD/MM/YYYY hh:mm:ss")}`}
                  </h2>
                  {showECG.data.map((item, index) => {
                    return (
                      <div>
                        <div>
                          {`Resultado N° ${item.order}`}: {item.labelResult}
                        </div>
                        <div>
                          <PatientEcgComponent
                            dataPoints={item.dataECG}
                            key={index}
                          />
                        </div>
                        <br />
                      </div>
                    );
                  })}
                </div>
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

export default PatientEcgDetails;
