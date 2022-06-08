import React, { useEffect, useState } from "react";
import { Form, Input, PageHeader, Select } from "antd";
import { useHistory, useParams } from "react-router-dom";
import "./index.scss";
import { patientService } from "../../../services/patient";
import { wearableService } from "../../../services/wearable";
import LoadingComponent from "../../loading";

const PatientForm = () => {
  const [wearables, setWearables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form] = Form.useForm();

  let history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    wearableService.getWearables().then((response) => {
      setWearables([...response]);
    });
    patientService.showPatient(id).then((response) => {
      form.setFieldsValue({ ...response });
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });
  }, [form, id]);

  return (
    <div>
      <PageHeader onBack={() => history.push(`/`)} title="Paciente" />

      {!loading ? (
        <Form layout="vertical" form={form} autoComplete="off">
          <div className="container-form">
            <Form.Item label="Nombre" name="nombre">
              <Input disabled={true} />
            </Form.Item>
            <Form.Item label="Apellido Paterno" name="apellidoM">
              <Input disabled={true} />
            </Form.Item>
          </div>
          <div className="container-form">
            <Form.Item label="Apellido Materno" name="apellidoP">
              <Input disabled={true} />
            </Form.Item>
            <Form.Item label="DNI" name="dni">
              <Input disabled={true} />
            </Form.Item>
          </div>
          <div className="container-form">
            <Form.Item label="Correo" name="email">
              <Input disabled={true} />
            </Form.Item>
            <Form.Item label="Wearable" name="idWearable">
              <Select disabled={true}>
                {wearables.map((item) => {
                  return (
                      <Select.Option
                          key={item.idWearable}
                          value={item.idWearable}
                      >
                        {item.modelo}
                      </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
          </div>
        </Form>
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
};

export default PatientForm;
