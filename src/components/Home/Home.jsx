import React, { useState, useEffect } from "react";
import "./style.css";
import data from "../data.json";

const getLocalInvoiceList = () => {
  const stringifyInvoiceList = localStorage.getItem("invoiceList");
  const parsedInvoiceList = JSON.parse(stringifyInvoiceList);

  if (parsedInvoiceList === null) {
    return [];
  } else {
    return parsedInvoiceList;
  }
};

const Home = () => {
  const [invoiceList, setInvoiceList] = useState(getLocalInvoiceList());
  const [clientName, setClientName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [status, setStatus] = useState("Paid");

  const onInvoiceForm = (event) => {
    event.preventDefault();

    if (!clientName || !date || !amount || !status) {
      alert("Please fill all field");
    } else {
      const newInvoice = {
        invoiceNumber: invoiceList.length + 1,
        clientName,
        date,
        amount,
        status,
      };
      setInvoiceList([...invoiceList, newInvoice]);
    }
    setClientName("");
    setDate("");
    setAmount("");
    setStatus("");
  };

  // delete items
  const deleteItems = (invoiceNumber) => {
    const deleteItem = invoiceList.filter(
      (eachItem) => eachItem.invoiceNumber !== invoiceNumber
    );
    setInvoiceList(deleteItem);
  };

  // storing items in localStorage
  useEffect(() => {
    localStorage.setItem("invoiceList", JSON.stringify(invoiceList));
  }, [invoiceList]);

  // edit items
  const editItems = (invoiceNumber) => {
    const editing = invoiceList.find((eachItem) => {
      return eachItem.invoiceNumber === invoiceNumber;
    });
    console.log(editing);

    setClientName(editing.clientName);
    setDate(editing.date);
    setAmount(editing.amount);
    setStatus(editing.status);
  };

  // filter items
  const filterUser = invoiceList.filter((eachUser) =>
    eachUser.clientName.toLowerCase().startsWith(searchInput.toLowerCase())
  );
  return (
    <>
      <div className="bg-container d-flex flex-column justify-content-start">
        <div className="container mt-5 ">
          <input
            type="text"
            className="form-control w-25 m-auto mb-3"
            placeholder="Search User"
            onChange={(event) => setSearchInput(event.target.value)}
            value={searchInput}
          />
          <table className="table invoice-container">
            <thead>
              <tr>
                <th scope="col">Invoice No.</th>
                <th scope="col">Client Name</th>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
                <th scope="col"></th>
              </tr>
            </thead>
            {filterUser.map((eachItem) => {
              const { invoiceNumber, clientName, date, amount, status } =
                eachItem;
              return (
                <tbody key={invoiceNumber}>
                  <tr>
                    <th scope="row">{invoiceNumber}</th>
                    <td>{clientName}</td>
                    <td>{date}</td>
                    <td>{amount}</td>
                    <td>{status}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => editItems(invoiceNumber)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteItems(invoiceNumber)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
        <div className="container mt-2">
          <form
            className="bg-white p-3 invoice-container"
            onSubmit={onInvoiceForm}
          >
            <h2 className="text-center">Create Invoice</h2>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
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
              <label htmlFor="exampleFormControlInput1" className="form-label">
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
              <label htmlFor="exampleFormControlInput1" className="form-label">
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
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Status
              </label>
              <select
                className="form-control"
                onChange={(event) => setStatus(event.target.value)}
                value={status}
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
      </div>
    </>
  );
};

export default Home;
