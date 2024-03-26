import CustomDatePicker from "./components/CustomDatePicker/CustomDatePicker";
import CustomFormWithDatePicker from "./components/CustomFormWithDatePicker/CustomFormWithDatePicker";

export default function Home() {
  return (
    <main className="p-8">
      <section className="mb-8">
      <CustomDatePicker /> 
      </section>
      <section className="mb-8 border border-green-500 py-8 rounded-lg">
        <h1 className="text-2xl font-bold flex justify-center">Custom Form With DatePicker</h1>
        <CustomFormWithDatePicker/>
      </section>
    </main>
  );
}
