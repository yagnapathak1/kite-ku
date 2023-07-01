import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroImg from "../assets/images/hero-banner.png";
import kitlogo from "../assets/images/kite-student-portal-logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const currentYear = new Date().getFullYear();

  const showToast = (message, type) => {
    switch (type) {
      case "success":
        toast.success(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        break;
      case "error":
        toast.error(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        break;
      case "warning":
        toast.warning(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        break;
      case "info":
        toast.info(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        break;
      default:
        toast(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        break;
    }
  };
  const [isSettingModal, setIsSettingModal] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (navigator.onLine) {
      navigate("demo-iframe");
    } else {
      console.log("No network connection!");
      showToast("No network connection!", "error");
    }
  };

  const handleSaveChanges = () => {
    const customUrlInput = document.getElementById("custom-url");
    if (customUrlInput) {
      const url = customUrlInput.value;
      if (url) {
        if (navigator.onLine) {
          navigate(`demo-iframe?url=${url}`);
        } else {
          console.log("No network connection!");
          showToast("No network connection!", "error");
        }
      } else {
        console.log("Required !!!!");
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="content w-100 text-light h-100">
        <div>
          <div className="banner-section">
            <img src={HeroImg} alt="Hero Image" />
          </div>
          <div className="logo-container d-flex justify-content-center align-items-center">
            <img src={kitlogo} alt="Kit Logo" />
          </div>
          <div className="box">
            <div className="textfield-default-wrapper">
              <div className="textfield-default">
                <div className="frame">
                  <button className="button" onClick={handleGetStarted}>
                    <span className="text-wrapper">GET STARTED</span>
                    <img
                      className="vector"
                      alt="Vector"
                      src="https://generation-sessions.s3.amazonaws.com/2a8424e45e6c92df757b39d0d7e26ee0/img/vector.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button
              type="button"
              className="btn me-3"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={(e) => setIsSettingModal(true)}
            >
              <img
                src="https://generation-sessions.s3.amazonaws.com/2a8424e45e6c92df757b39d0d7e26ee0/img/group-1@2x.png"
                alt="setting"
              />
              <span>Setting</span>
            </button>
            <button
              type="buttom"
              data-bs-toggle="modal"
              data-bs-target="#lab-slide-bottom-popup"
            >
              <img
                src="https://generation-sessions.s3.amazonaws.com/2a8424e45e6c92df757b39d0d7e26ee0/img/help-web-button-1.svg"
                alt="setting"
              />
              <span>Help</span>
            </button>
          </div>
        </div>
      </div>
      <div className="footer text-center d-flex justify-content-center align-items-center">
        <p className="copywrite">
          © {currentYear} University of Kansas. All Rights Reserved.
        </p>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-bottomed">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Settings
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <p className="mt-2 ms-3">Set Local Caching Server URL.</p>
            <div className="modal-body">
              <input
                className="w-100"
                type="text"
                placeholder="Enter url"
                id="custom-url"
                defaultValue="https://oceanwp.org/demos/"
                // disabled
                required
              />
            </div>
            <div className="reset-links ms-3 me-3">
              <p>
                If you would like to reset the URL to KITE’s main server, please
                tap on Reset it.
              </p>
              <a>Rest</a>
            </div>

            <div className="modal-footer justify-content-start">
              <button
                type="button"
                onClick={handleSaveChanges}
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="lab-slide-bottom-popup"
        tabIndex={-1}
        aria-labelledby="lab-slide-bottom-popup"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-bottomed">
          <div className="modal-content help-url-cnc">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Help
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                . Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry&#39;s
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                . Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry&#39;s
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
