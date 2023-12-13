import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import jsonData from "../../public/csvjson.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function GroupExample({ jsonData }) {
  return (
    <div className="flex flex-wrap -mx-2">
      {jsonData.map((item, index) => (
        <div key={index} className="w-60 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
          <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <div className="aspect-w-4 aspect-h-3">
                <Card.Img
                  variant="top"
                  src={item.Image}
                  alt={item.Name}
                  className="object-cover h-60 w-full mx-auto my-auto block"
                />
              </div>
            </a>
            <Card.Body className="p-5">
              <a href="#">
                <Card.Title className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.Name}
                </Card.Title>
              </a>
              <Card.Text className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-[18vh]">
                {item.Description}
                {/* <Card.Text className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-[18vh]"> */}
                <br />
                <span className="text-lg font-bold text-blue-600">
                  Price: {item.Price}
                </span>
              </Card.Text>
              {/* </Card.Text> */}

              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </Card.Body>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GroupExample;
