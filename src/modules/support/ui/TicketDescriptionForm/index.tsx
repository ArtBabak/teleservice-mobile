import React, { FC, useState } from "react";
import styles from "./index.module.css";
import SendButton from "../../../../shared/ui/buttons/SendButton";
import { TicketsActionTypes } from "../../../../types/tickets";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

const TicketDescriptionForm: FC = () => {
  const dispatch = useDispatch();
  const location: string = useLocation().pathname;
  const topic: string = location.split("/").slice(-1)[0];
  const [message, setMessage] = useState<string>("");

  const ticketsObj: any = useTypedSelector((state) => state.ticketReducer);
  const count: number = ticketsObj.count;

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMessage(e.target.value);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: TicketsActionTypes.ADD_TICKET,
      payload: { topic, message, num: count + 1 },
    });
    setMessage("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className={styles["ticket-description__form"]}
    >
      <input
        value={message}
        onChange={changeHandler}
        type={"text"}
        placeholder="Tap an option or type a message"
      />
      <SendButton />
    </form>
  );
};

export default TicketDescriptionForm;
