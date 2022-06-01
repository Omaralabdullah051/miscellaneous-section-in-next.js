import Image from "next/image";
import img from "../public/1.jpg";

const PetsPage = () => {
  return (
    <div>
      {/* //*note: placeholder attribute only used on the Image component that has static src attribute */}
      <Image src={img} placeholder="blur" alt="pet" width="280" height="420" />

      {["1", "2", "3", "4", "5"].map((path) => (
        <div key={path}>
          <Image src={`/${path}.jpg`} alt="pet" width="280" height="420" />
        </div>
      ))}
    </div>
  );
};

export default PetsPage;
