import CustomBody from "../../components/CustomBody";
import CustomTable from "../../components/CustomTable";

const Transportation = () => {
  return (
    <CustomBody isLoading={false} header="Transportation">
      <CustomTable row={[]} column={[]} isLoading />
    </CustomBody>
  );
};

export default Transportation;
