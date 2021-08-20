import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  Card,
  Col,
  Container,
  Progress,
  Row,
  Table,
  Button,
  ButtonGroup,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import icon from "../../assets/img/checkicon.PNG";
import icon1 from "../../assets/img/checkicon1.PNG";
import icon2 from "../../assets/img/checkicon2.PNG";
import aave from "../../assets/img/aavelogo.PNG";
import compound from "../../assets/img/compoundlogo.PNG";
import finance from "../../assets/img/financelogo.PNG";
import icon4 from "../../assets/img/icon4.PNG";
import icon9 from "../../assets/img/icon2.PNG";
import icon3 from "../../assets/img/icon3.PNG";
import icon5 from "../../assets/img/icon5.PNG";
import icon6 from "../../assets/img/icon6.PNG";
import icon7 from "../../assets/img/icon7.PNG";
import icon8 from "../../assets/img/icon8.PNG";

const Markets = (props) => {
  let [activeTab, setActiveTab] = useState("BIFI");

  return (
    <>
      <section className="p-0">
        <label
          class="btn mr-3 p-3"
          style={{
            color: "black",
            backgroundColor: "white",
            borderColor: "rgb(255, 0, 131)",
          }}
          for="btncheck1"
          className={`btn mr-3 bar-item ml-0 ${
            activeTab == "BIFI" ? "active" : ""
          }`}
          onClick={(e) => setActiveTab("BIFI")}
        >
          <img
            left
            className="tab-image"
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: "0px",
              marginRight: "10px",
            }}
            //   style={{ marginButtom: "auto" }}
            src="https://www.beefy.finance/img/beefy.svg"
            alt="Card image cap"
          />
          BIFI{" "}
          <input
            type="checkbox"
            style={{ marginLeft: "5px" }}
            id="btncheck1"
            autocomplete="off"
          />
        </label>

        <label
          class="btn mr-3 p-3"
          style={{
            color: "black",
            backgroundColor: "white",
            borderColor: "rgb(255, 0, 131)",
          }}
          for="btncheck2"
          className={`btn mr-3 bar-item ml-0 ${
            activeTab == "Swipe" ? "active" : ""
          }`}
          onClick={(e) => setActiveTab("Swipe")}
        >
          <img
            left
            className="tab-image"
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: "0px",
              marginRight: "10px",
            }}
            //   style={{ marginButtom: "auto" }}
            src="https://swipe.io/images/logo.svg"
            alt="Card image cap"
          />
          Swipe{" "}
          <input
            type="checkbox"
            style={{ marginLeft: "5px" }}
            id="btncheck2"
            autocomplete="off"
          />
        </label>

        <label
          class="btn mr-3"
          style={{
            color: "black",
            backgroundColor: "white",
            borderColor: "rgb(255, 0, 131)",
          }}
          for="btncheck3"
          className={`btn mr-3 bar-item ml-0 ${
            activeTab == "Finance" ? "active" : ""
          }`}
          onClick={(e) => setActiveTab("Finance")}
        >
          <img
            left
            className="tab-image"
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: "0px",
              marginRight: "10px",
            }}
            //   style={{ marginButtom: "auto" }}
            src="https://www.alpacafinance.org/assets/images/logo.png"
            alt="Card image cap"
          />
          {" "}
          <input
            type="checkbox"
            style={{ marginLeft: "5px" }}
            id="btncheck3"
            autocomplete="off"
          />
        </label>
        {activeTab == "BIFI" ? (
          <div className=" mt-5 align-items-baseline">
            <p className="ml-1 text-muted">Total value locked</p>
            <h3 className="font-weight-bold">
              $237,430,892.83{" "}
              <i class="fas fa-shield-alt" style={{ color: "#00d395" }}></i>
            </h3>
          </div>
        ) : (
          ""
        )}

        {activeTab == "BIFI" ? (
          <Card
            className="custom-card mt-4"
            // style={{hieght:'10%'}}
          >
            {/* <i className="fa fa-tractor"></i> */}
            <div className="d-flex" style={{ padding: "12px" }}>
              <img
                left
                className="main-image"
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                //   style={{ marginButtom: "auto" }}
                src="https://www.beefy.finance/img/beefy.svg"
                alt="Card image cap"
              />
              {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
              <div
                className=" pl-2 pr-2 align-items-baseline"
                style={{ marginRight: "10px" }}
              >
                <p
                  style={{
                    fontWeight: "600",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                >
                  BIFI
                </p>
                <div
                  className="mb-0 text-muted"
                  style={{ fontSize: "12px", fontWeight: "600" }}
                >
                  Markets
                </div>
              </div>
              <div
                className="pl-2 pr-2"
                style={{ marginLeft: "10px", textAlign: "left" }}
              >
                <p
                  className="mb-0 text-muted"
                  style={{
                    fontWeight: "600",
                    fontSize: "12px",
                    textAlign: "left",
                  }}
                >
                  Total value locked
                </p>
                <p
                  className=" mb-0"
                  style={{
                    fontWeight: "600",
                    //   textAlign: "end",
                  }}
                >
                  $131,552,949.29
                </p>
              </div>
            </div>
          </Card>
        ) : (
          ""
        )}
        {activeTab == "BIFI" ? (
          <Card className="custom-card mt-4">
            <Table className="custom-table market-table" responsive>
              <thead>
                <tr>
                  <th>Token Name </th>
                  <th>Senior Liquidity</th>
                  <th>Senior APY</th>
                  <th>Junior Liquidity</th>
                  <th>Junior APY</th>
                  <th>Originator APY</th>
                  <th>jToken conversion rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        left
                        width="15%"
                        height="15%"
                        style={{
                          margin: "auto",
                          marginRight: "5px",
                          marginLeft: "5px",
                        }}
                        src={icon3}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2">
                        <h6 style={{ fontWeight: "600" }}>BUSD</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          BUSD Stablecoin
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>246.66K BUSD</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $246.74K
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600", color: "#00d395" }}>
                      2.11%
                    </h6>
                    {/* </Link> */}
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>21.18M BUSD</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $21.19M
                        </div>
                      </div>
                    </div>
                  </td>

                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600", color: "#a26ee3" }}>
                      2.82%
                    </h6>
                    {/* </Link> */}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600" }}>2.81%</h6>
                    {/* </Link> */}
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>1 cBUSD</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          = 1.0323 DAI
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Button color="outline-site-primary">Details</Button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        left
                        width="15%"
                        height="15%"
                        style={{
                          margin: "auto",
                          marginRight: "5px",
                          marginLeft: "5px",
                        }}
                        src={icon4}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2">
                        <h6 style={{ fontWeight: "600" }}>USDC</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          USDC Stablecoin
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>246.66K USDC</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $246.74K
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600", color: "#00d395" }}>
                      2.11%
                    </h6>
                    {/* </Link> */}
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>21.18M USDC</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $21.19M
                        </div>
                      </div>
                    </div>
                  </td>

                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600", color: "#a26ee3" }}>
                      2.82%
                    </h6>
                    {/* </Link> */}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600" }}>2.81%</h6>
                    {/* </Link> */}
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>1 cUSDC</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          = 1.0323 USDC
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Button color="outline-site-primary">Details</Button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        left
                        width="15%"
                        height="15%"
                        style={{
                          margin: "auto",
                          marginRight: "5px",
                          marginLeft: "5px",
                        }}
                        src={icon9}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2">
                        <h6 style={{ fontWeight: "600" }}>DAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          Dai Stablecoin
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>246.66K DAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $246.74K
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600", color: "#00d395" }}>
                      2.11%
                    </h6>
                    {/* </Link> */}
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>21.18M DAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $21.19M
                        </div>
                      </div>
                    </div>
                  </td>

                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600", color: "#a26ee3" }}>
                      2.82%
                    </h6>
                    {/* </Link> */}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600" }}>2.81%</h6>
                    {/* </Link> */}
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>1 cDA</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          = 1.0323 DAI
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Button color="outline-site-primary">Details</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        ) : (
          ""
        )}
        {activeTab == "Swipe" ? (
          <div className=" mt-5 align-items-baseline">
            <p className="ml-1 text-muted">Total value locked</p>
            <h3 className="font-weight-bold">
              $237,430,892.83{" "}
              <i class="fas fa-shield-alt" style={{ color: "#00d395" }}></i>
            </h3>
          </div>
        ) : (
          ""
        )}

        {activeTab == "Swipe" ? (
          <Card
            className="custom-card mt-4"
            // style={{hieght:'10%'}}
          >
            {/* <i className="fa fa-tractor"></i> */}
            <div className="d-flex" style={{ padding: "12px" }}>
              <img
                left
                className="main-image"
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                //   style={{ marginButtom: "auto" }}
                src="https://swipe.io/images/logo.svg"
                alt="Card image cap"
              />
              {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
              <div
                className=" pl-2 pr-2 align-items-baseline"
                style={{ marginRight: "10px" }}
              >
                <p
                  style={{
                    fontWeight: "600",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                >
                  Swipe
                </p>
                <div
                  className="mb-0 text-muted"
                  style={{ fontSize: "12px", fontWeight: "600" }}
                >
                  Markets
                </div>
              </div>
              <div
                className="pl-2 pr-2"
                style={{ marginLeft: "10px", textAlign: "left" }}
              >
                <p
                  className="mb-0 text-muted"
                  style={{
                    fontWeight: "600",
                    fontSize: "12px",
                    textAlign: "left",
                  }}
                >
                  Total value locked
                </p>
                <p
                  className=" mb-0"
                  style={{
                    fontWeight: "600",
                    //   textAlign: "end",
                  }}
                >
                  $131,552,949.29
                </p>
              </div>
            </div>
          </Card>
        ) : (
          ""
        )}
        {activeTab == "Swipe" ? (
          <Card className="custom-card mt-4">
            <Table className="custom-table market-table" responsive>
              <thead>
                <tr>
                  <th>Token Name </th>
                  <th>Senior Liquidity</th>
                  <th>Senior APY</th>
                  <th>Junior Liquidity</th>
                  <th>Junior APY</th>
                  <th>Originator APY</th>
                  <th>jToken conversion rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        left
                        width="15%"
                        height="15%"
                        style={{
                          margin: "auto",
                          marginRight: "5px",
                          marginLeft: "5px",
                        }}
                        src={icon3}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2">
                        <h6 style={{ fontWeight: "600" }}>DAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          Dai Stablecoin
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>246.66K DAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $246.74K
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600", color: "#00d395" }}>
                      2.11%
                    </h6>
                    {/* </Link> */}
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>21.18M DAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $21.19M
                        </div>
                      </div>
                    </div>
                  </td>

                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600", color: "#a26ee3" }}>
                      2.82%
                    </h6>
                    {/* </Link> */}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600" }}>2.81%</h6>
                    {/* </Link> */}
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>1 bb_aDAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          = 1.0323 DAI
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Button color="outline-site-primary">Details</Button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        left
                        width="15%"
                        height="15%"
                        style={{
                          margin: "auto",
                          marginRight: "5px",
                          marginLeft: "5px",
                        }}
                        src={icon4}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2">
                        <h6 style={{ fontWeight: "600" }}>DAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          Dai Stablecoin
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>246.66K DAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $246.74K
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600", color: "#00d395" }}>
                      2.11%
                    </h6>
                    {/* </Link> */}
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>21.18M DAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $21.19M
                        </div>
                      </div>
                    </div>
                  </td>

                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600", color: "#a26ee3" }}>
                      2.82%
                    </h6>
                    {/* </Link> */}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600" }}>2.81%</h6>
                    {/* </Link> */}
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>1 bb_aDAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          = 1.0323 DAI
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Button color="outline-site-primary">Details</Button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        left
                        width="15%"
                        height="15%"
                        style={{
                          margin: "auto",
                          marginRight: "5px",
                          marginLeft: "5px",
                        }}
                        src={icon9}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2">
                        <h6 style={{ fontWeight: "600" }}>DAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          Dai Stablecoin
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>246.66K DAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $246.74K
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600", color: "#00d395" }}>
                      2.11%
                    </h6>
                    {/* </Link> */}
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>21.18M DAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $21.19M
                        </div>
                      </div>
                    </div>
                  </td>

                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600", color: "#a26ee3" }}>
                      2.82%
                    </h6>
                    {/* </Link> */}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600" }}>2.81%</h6>
                    {/* </Link> */}
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>1 bb_aDAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          = 1.0323 DAI
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Button color="outline-site-primary">Details</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        ) : (
          ""
        )}

        {activeTab == "Finance" ? (
          <div className=" mt-5 align-items-baseline">
            <p className="ml-1 text-muted">Total value locked</p>
            <h3 className="font-weight-bold">
              $237,430,892.83{" "}
              <i class="fas fa-shield-alt" style={{ color: "#00d395" }}></i>
            </h3>
          </div>
        ) : (
          ""
        )}

        {activeTab == "Finance" ? (
          <Card
            className="custom-card mt-4"
            // style={{hieght:'10%'}}
          >
            {/* <i className="fa fa-tractor"></i> */}
            <div className="d-flex" style={{ padding: "12px" }}>
              <img
                left
                width="auto"
                className="main-image"
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                //   style={{ marginButtom: "auto" }}
                src="https://www.alpacafinance.org/assets/images/logo.png"
                alt="Card image cap"
              />
              {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
              <div
                className=" pl-2 pr-2 align-items-baseline"
                style={{ marginRight: "10px" }}
              >
                <p
                  style={{
                    fontWeight: "600",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                >
                  Alpaca Finance
                </p>
                <div
                  className="mb-0 text-muted"
                  style={{ fontSize: "12px", fontWeight: "600" }}
                >
                  Markets
                </div>
              </div>
              <div
                className="pl-2 pr-2"
                style={{ marginLeft: "10px", textAlign: "left" }}
              >
                <p
                  className="mb-0 text-muted"
                  style={{
                    fontWeight: "600",
                    fontSize: "12px",
                    textAlign: "left",
                  }}
                >
                  Total value locked
                </p>
                <p
                  className=" mb-0"
                  style={{
                    fontWeight: "600",
                    //   textAlign: "end",
                  }}
                >
                  $131,552,949.29
                </p>
              </div>
            </div>
          </Card>
        ) : (
          ""
        )}
        {activeTab == "Finance" ? (
          <Card className="custom-card mt-4">
            <Table className="custom-table market-table" responsive>
              <thead>
                <tr>
                  <th>Token Name </th>
                  <th>Senior Liquidity</th>
                  <th>Senior APY</th>
                  <th>Junior Liquidity</th>
                  <th>Junior APY</th>
                  <th>Originator APY</th>
                  <th>jToken conversion rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        left
                        width="15%"
                        height="15%"
                        style={{
                          margin: "auto",
                          marginRight: "5px",
                          marginLeft: "5px",
                        }}
                        src={icon3}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2">
                        <h6 style={{ fontWeight: "600" }}>DAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          Dai Stablecoin
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>246.66K DAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $246.74K
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600", color: "#00d395" }}>
                      2.11%
                    </h6>
                    {/* </Link> */}
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>21.18M DAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $21.19M
                        </div>
                      </div>
                    </div>
                  </td>

                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600", color: "#a26ee3" }}>
                      2.82%
                    </h6>
                    {/* </Link> */}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600" }}>2.81%</h6>
                    {/* </Link> */}
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>1 bb_aDAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          = 1.0323 DAI
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Button color="outline-site-primary">Details</Button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        left
                        width="15%"
                        height="15%"
                        style={{
                          margin: "auto",
                          marginRight: "5px",
                          marginLeft: "5px",
                        }}
                        src={icon4}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2">
                        <h6 style={{ fontWeight: "600" }}>DAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          Dai Stablecoin
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>246.66K DAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $246.74K
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600", color: "#00d395" }}>
                      2.11%
                    </h6>
                    {/* </Link> */}
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>21.18M DAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $21.19M
                        </div>
                      </div>
                    </div>
                  </td>

                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600", color: "#a26ee3" }}>
                      2.82%
                    </h6>
                    {/* </Link> */}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600" }}>2.81%</h6>
                    {/* </Link> */}
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>1 bb_aDAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          = 1.0323 DAI
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Button color="outline-site-primary">Details</Button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        left
                        width="15%"
                        height="15%"
                        style={{
                          margin: "auto",
                          marginRight: "5px",
                          marginLeft: "5px",
                        }}
                        src={icon9}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2">
                        <h6 style={{ fontWeight: "600" }}>DAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          Dai Stablecoin
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>246.66K DAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $246.74K
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600", color: "#00d395" }}>
                      2.11%
                    </h6>
                    {/* </Link> */}
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>21.18M DAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $21.19M
                        </div>
                      </div>
                    </div>
                  </td>

                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600", color: "#a26ee3" }}>
                      2.82%
                    </h6>
                    {/* </Link> */}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {/* <Link to="https://app.barnbridge.com/"> */}
                    <h6 style={{ fontWeight: "600" }}>2.81%</h6>
                    {/* </Link> */}
                  </td>
                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h6 style={{ fontWeight: "600" }}>1 bb_aDAI</h6>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          = 1.0323 DAI
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Button color="outline-site-primary">Details</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default Markets;
