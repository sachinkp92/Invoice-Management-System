import React, { useState } from "react";

const InvoiceForm = () => {
  // const [invoiceList, setInvoiceList] = useState([]);
  // const [invoiceObj, setInvoiceObj] = useState({
  //   clientName: "",
  //   date: "",
  //   amount: "",
  //   status: "",
  // });
  const [clientName, setClientName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");

  const onInvoiceForm = (event) => {
    event.preventDefault();

    const newInvoice = {
      clientName,
      date,
      amount,
      status,
    };
    setInvoiceList([...newInvoice, invoiceList]);
    // setInvoiceObj({ clientName, date, amount, status });
  };

  //   const optionStatus = getStatus();
  return (
    <div className="container mt-5">
      <form className="bg-light rounded border p-5" onSubmit={onInvoiceForm}>
        <h2 className="text-center">Create Invoice</h2>
        {/* <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Invoice Number
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="invoice Number" onChange={(event)=>setDate()}
          />
        </div> */}
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
            onChange={(event) => setClientName(event.target.value)}
            value={clientName}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
            onChange={(event) => setDate(event.target.value)}
            value={date}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Amount"
            onChange={(event) => setAmount(event.target.value)}
            value={amount}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Status
          </label>
          {/* <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="invoicNumber"
          /> */}
          <select
            className="form-control"
            onChange={(event) => setStatus(event.target.value)}
          >
            <option>Paid</option>
            <option>Unpaid</option>
            <option>Pending</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InvoiceForm;
