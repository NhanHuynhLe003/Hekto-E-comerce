import Acceories_Fashion_Card from "@/components/AcceoriesFashion/Acceories_Fashion_Card";
import Acceories_Fashion_Filter from "@/components/AcceoriesFashion/Acceories_Fashion_Filter";
import AuthorWriting from "@/components/authorWriting/AuthorWriting";

export default function TestPage() {
  return (
    <div style={{ width: "80%", margin: "5rem auto" }}>
      <h1>List Components</h1>
      <br />
      <h3>Accessories_Fashion</h3>
      <br />
      <br />
      <h4>Acceories_Fashion_Card</h4>
      <br />
      <br />
      <h5>list default</h5>
      <Acceories_Fashion_Card
        type="list"
        widthCard="30rem"
      ></Acceories_Fashion_Card>
      <br />
      <br />
      <h5>grid</h5>
      <Acceories_Fashion_Card
        type="grid"
        widthCard="20%"
      ></Acceories_Fashion_Card>

      <br />
      <br />
      <h4>Acceories_Fashion_Filter</h4>
      <br />
      <br />
      <Acceories_Fashion_Filter
        page={1}
        perpageSelector={20}
        viewSelector={1}
      ></Acceories_Fashion_Filter>
      <br />
      <br />
      <h2>Author Writing</h2>
      <br />
      <br />
      <h4>Author Writting</h4>
      <br />
      <br />
      <AuthorWriting></AuthorWriting>
    </div>
  );
}
