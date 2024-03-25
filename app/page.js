import CustomDatePicker from "./components/CustomDatePicker/CustomDatePicker";
import AICustomDatePicker from "./components/TwoCustomDatePicker/AICustomDatePicker";

export default function Home() {
  return (
    <main className="p-8">
      <section className="mb-8">
      <CustomDatePicker /> 
      </section>
      <section className="mb-8">
        <AICustomDatePicker/>
      </section>
    </main>
  );
}
