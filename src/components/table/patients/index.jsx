import React, { useEffect, useState } from "react";
import "./index.scss";
import { Button, Divider, Table, Input } from "antd";
import { useHistory } from "react-router-dom";
import { patientService } from "../../../services/patient";

const { Search } = Input;

const PatientsTable = () => {
  const [data, setData] = useState([]);
  const [dataTemp, setDataTemp] = useState([]);
  const [loading, setLoading] = useState(true);
  let history = useHistory();

  useEffect(() => {
    patientService
      .getPatients()
      .then((response) => {
        setData([...response]);
        setDataTemp([...response]);
        setLoading(false);
      })
      .catch(() => {
        setData([]);
      });
  }, []);

  const columns = () => {
    return [
      {
        title: "Nombre",
        dataIndex: "nombre",
      },
      {
        title: "Apellido",
        dataIndex: "apellidoP",
        render: (value, record) => (
          <div>{`${record.apellidoP} ${record.apellidoM}`}</div>
        ),
      },
      {
        title: "DNI",
        dataIndex: "dni",
        width: "12%",
      },
      {
        title: "Edad",
        dataIndex: "edad",
        width: "12%",
      },
      {
        title: "Polar H10",
        dataIndex: "wearable",
        width: "12%",
      },
      {
        title: "Opciones",
        dataIndex: "idPaciente",
        width: "13%",
        render: (record) => (
          <React.Fragment>
            <div style={{ display: "flex", justifyItems: "start" }}>
              <div>
                <Button
                  type="link"
                  onClick={() => history.push(`/paciente/${record}`)}
                >
                  Ver paciente
                </Button>
              </div>
              <Divider
                type="vertical"
                style={{ marginTop: "auto", marginBottom: "auto" }}
              />
              <div>
                <Button
                  type="link"
                  onClick={() => history.push(`/paciente/${record}/ecg`)}
                >
                  Ver ECG
                </Button>
              </div>
            </div>
          </React.Fragment>
        ),
      },
    ];
  };

  const search = (value) => {
    const response = dataTemp.filter((item) => {
      return (
        `${item.nombre} ${item.apellidoP} ${item.dni}`
          .toLowerCase()
          .indexOf(value.toLowerCase()) >= 0
      );
    });

    setData([...response]);
  };

  return (
    <div>
      <Search
        placeholder="Buscar paciente"
        allowClear
        style={{ width: 250, marginBottom: 15 }}
        onChange={(e) => search(e.target.value)}
      />
      <Table
        columns={columns()}
        dataSource={data}
        rowKey={(record) => record.idPaciente}
        bordered
        loading={loading}
        size="small"
        showSorterTooltip={false}
        locale={{
          emptyText: (
            <div>
              {
                "No cuenta con colaboradores ubicados en el cuadrante seleccionado."
              }
            </div>
          ),
        }}
        pagination={{
          pageSizeOptions: ["25", "50", "100"],
          showSizeChanger: true,
          size: "default",
          defaultPageSize: 25,
          locale: { items_per_page: "/ página" },
        }}
      />
    </div>
  );
};

export default PatientsTable;
