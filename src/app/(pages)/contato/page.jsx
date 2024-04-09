import Container from "../../components/container_text";
import FormContact from "../../components/contact_address";
import { Rocket } from "lucide-react";

const Contact = () => {
  return (
    <>
      <FormContact />

      <Container
        h2Text={"Venha fazer parte dessa comunidade global"}
        pText={
          "Para realizar pesquisas de ponta, nos juntamos a instituições de saúde, ensino e laboratórios de pesquisa em nível internacional. Juntos, formamos uma rede colaborativa que funciona como uma força global para a inovação científica."
        }
      >
        <Rocket height={45} width={45} />
      </Container>
    </>
  );
};

export default Contact;



