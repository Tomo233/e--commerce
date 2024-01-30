import Interval from "../../components/Interval";
import { Button as ArrowButton } from "primereact/button";
import Carousel from "../../components/Carousel";
import Button from "../../components/Button";
import Line from "../../components/Line";
import RedBorder from "../../components/RedBorder";
import ProminentProducts from "../../components/ProminentProducts";

function FlashSalesSection() {
  return (
    <section className="my-12 relative">
      <RedBorder>Today&rsquo;s</RedBorder>
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">Flash Sales</h2>
        <Interval />
        <div className="flex gap-4">
          <ArrowButton
            icon="pi pi-arrow-left"
            rounded
            severity="secondary"
            aria-label="Bookmark"
            className="bg-slate-200"
          />
          <ArrowButton
            icon="pi pi-arrow-right"
            rounded
            severity="secondary"
            aria-label="Bookmark"
            className="bg-slate-200"
          />
        </div>
      </div>
      <ProminentProducts />
      <Button type="primary">View All Products </Button>
      <Line />
    </section>
  );
}

export default FlashSalesSection;
