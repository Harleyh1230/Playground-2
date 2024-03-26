import CustomDatePicker from "./components/CustomDatePicker/CustomDatePicker";
import CustomFormWithDatePicker from "./components/CustomFormWithDatePicker/CustomFormWithDatePicker";

export default function Home() {
  return (
    <main className="p-8">
      <section className="mb-8">
      <CustomDatePicker /> 
      </section>
      <section className="mb-8">
        <CustomFormWithDatePicker/>
      </section>
    </main>
  );
}
