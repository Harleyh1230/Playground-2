import CustomDatePicker from "./components/CustomDatePicker/CustomDatePicker";
import TwoCustomDatePicker from "./components/TwoCustomDatePicker/TwoCustomDatePicker";

export default function Home() {
  return (
    <main className="p-8">
      <section className="mb-8">
      <CustomDatePicker /> 
      </section>
      <section className="mb-8">
        <TwoCustomDatePicker/>
      </section>
    </main>
  );
}
