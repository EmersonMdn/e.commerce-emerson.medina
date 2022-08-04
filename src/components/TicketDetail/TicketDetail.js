import "./TicketDetail.css";
import { useContext } from "react";
import { CartContext } from "../../contex/cartContex";
import TicketInfo from "./TicketInfo/TicketInfo";

function TicketDetail() {
  const { myUser } = useContext(CartContext);
  console.log(myUser);

  return (
    <>
      {myUser.map((data) => <TicketInfo key={data.id}
      id={data.id}
      orden={data.orden}
       />)} 
    </>
  );
}
export default TicketDetail;
