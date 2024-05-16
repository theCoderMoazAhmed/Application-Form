import React, { useState } from "react";
import "./UserDetails.css";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import UserDocument from "../UserDocument/UserDocument";

const UserDetails = () => {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);
  const EnglishTestsEnum = ["PTE", "FCE", "CAE", "TOEIC", "IELTS", "NOPE"];

  const handleGetUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/user/${userId}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const userData = await response.json();
      setUserData(userData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const generatePdf = () => {
    if (!userData) return null; // Return null if userData is not available
    return (
      <PDFDownloadLink
        document={<UserDocument userData={userData} />}
        fileName="user_data.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download PDF"
        }
      </PDFDownloadLink>
    );
  };

  return (
    <>
    <div className="get_user_input">
      <form className="user_detailed_form" onSubmit={handleGetUser}>
        <div>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
            placeholder="Please Enter User ID"
          />
        </div>
        <button type="submit">Get User</button>
        <button className="download_document"><div>{generatePdf()}</div></button>
      </form>
      </div>

      <div className="u_userdetails">
        {userData && (
          <div className="u_userdetails_page">
            <div className="u_page_border">
              <div className="u_form_details_container">
                <div className="u_company_info">
                  <div className="u_company_logo">
                    <img src="/studyh.jpeg" alt="company logo" />
                  </div>
                  <p className="u_company_goal">
                    Sending students abroad for international internships to
                    broaden horizons, gain valuable experience, and enhance
                    career prospects.
                  </p>
                  <h1 className="u_form_type">Student Application Form</h1>
                </div>
                <div className="u_form_constant">
                  <span className="u_form_id field form_date">
                    <h3 className="u_f_h">Form&nbsp;ID&nbsp;:&nbsp;</h3>
                    <input type="text" className="u_f_v" value={userData ? userData.id : ""}></input>
                  </span>
                  <span className="u_form_submission_date field">
                    <h3 className="u_f_h">Submission&nbsp;Date&nbsp;:&nbsp;</h3>
                    <input
                      type="date"
                      value={
                        userData && userData.applicationDate
                          ? userData.applicationDate.slice(0, 10)
                          : ""
                      }
                      className="u_f_v"
                    >
                    </input>
                  </span>
                  <div className="u_user_img">
                    <img src={userData ? userData.image : ""} alt="user" />
                  </div>
                </div>
                <div className="u_container_content personal_details">
                  <h2 className="u_container_heading">Personal&nbsp;Details</h2>
                  <div className="u_data_container personal_details_container u_form_details_grid">
                    <div className="u_field">
                      <label className="u_f_h">
                        First&nbsp;Name&nbsp;:&nbsp;
                      </label>
                      <input
                        type="text"
                        className="u_f_v u_i_f "
                        value={userData ? userData.firstName : ""}
                      />
                    </div>
                    <div className="u_field">
                      <label className="u_f_h">
                        Family&nbsp;Name&nbsp;:&nbsp;
                      </label>
                      <input
                        type="text"
                        className="u_f_v u_i_f "
                        value={userData ? userData.familyName : ""}
                      />
                    </div>
                    <div className="u_field">
                      <label className="u_f_h">
                        Personal&nbsp;CNIC&nbsp;:&nbsp;
                      </label>
                      <input
                        type="text"
                        className="u_f_v u_i_f "
                        value={userData ? userData.personalCnic : ""}
                      />
                    </div>
                    <div className="u_field">
                      <label className="u_f_h">
                        Personal&nbsp;Email&nbsp;:&nbsp;
                      </label>
                      <input
                        type="text"
                        className="u_f_v u_i_f "
                        value={userData ? userData.personalEmail : ""}
                      />
                    </div>
                    <div className="u_field">
                      <label className="u_f_h">
                        Personal&nbsp;Mobile&nbsp;:&nbsp;
                      </label>
                      <input
                        type="text"
                        className="u_f_v u_i_f "
                        value={userData ? userData.personalMobile : ""}
                      />
                    </div>
                    <div className="u_field">
                      <label className="u_f_h">
                        Personal&nbsp;Phone&nbsp;:&nbsp;
                      </label>
                      <input
                        type="text"
                        className="u_f_v u_i_f "
                        value={userData ? userData.personalPhone : ""}
                      />
                    </div>
                    <div className="u_field">
                      <label className="u_f_h">
                        Date&nbsp;of&nbsp;birth&nbsp;:&nbsp;
                      </label>
                      <input
                        type="date"
                        className="u_f_v u_i_f "
                        value={
                          userData && userData.personalDateOfBirth
                            ? userData.personalDateOfBirth.slice(0, 10)
                            : ""
                        }
                      />
                    </div>
                    <div className="u_field">
                      <label htmlFor="gender" className="u_f_h">
                        Gender&nbsp;:&nbsp;
                      </label>
                      <input
                        name="gender"
                        type="text"
                        className="u_f_v u_i_f "
                        value={userData ? userData.gender : ""}
                      />
                    </div>
                    <div className="u_field">
                      <label className="u_f_h">
                        Present&nbsp;Citizenship&nbsp;/&nbsp;Country&nbsp;:&nbsp;
                      </label>
                      <input
                        name="presentCitizenCountry"
                        type="text"
                        className="u_f_v u_i_f "
                        value={userData ? userData.citizenshipCountry : ""}
                      />
                    </div>
                    <div className="u_field">
                      <label className="u_f_h">
                        Present&nbsp;Occupation&nbsp;:&nbsp;
                      </label>
                      <input
                        name="presentOccupation"
                        type="text"
                        className="u_f_v u_i_f "
                        value={userData ? userData.presentOccupation : ""}
                      />
                    </div>
                    <div className="u_field">
                      <label htmlFor="visa" className="u_f_h">
                        Visa&nbsp;:&nbsp;
                      </label>
                      <input
                        name="visa"
                        type="text"
                        className="u_f_v u_i_f "
                        value={userData ? userData.visa : ""}
                      />
                    </div>
                    <div className="u_field">
                      <label className="u_f_h">
                        Passport&nbsp;Number&nbsp;:&nbsp;
                      </label>
                      <input
                        name="passportNumber"
                        type="text"
                        className="u_f_v u_i_f "
                        value={userData ? userData.passportNumber : ""}
                      />
                    </div>
                    <div className="u_field">
                      <label className="u_f_h">
                        Passport&nbsp;Expiry&nbsp;:&nbsp;
                      </label>
                      <input
                        name="passportExpiry"
                        type="date"
                        className="u_f_v u_i_f "
                        value={
                          userData && userData.passportExpiry
                            ? userData.passportExpiry.slice(0, 10)
                            : ""
                        }
                      />
                    </div>
                    <div className="u_adress_field u_field_adress">
                      <h3>Adress : </h3>
                      <div className="u_home_conatiners">
                        <div className="u_adress_container home_adress">
                          <p>Home</p>
                          <div className="u_inner_data_container u_inner_data_container_adress">
                            <label>Address&nbsp;:&nbsp;</label>
                            <input
                              name="homeAddress"
                              type="text"
                              className="u_f_v u_i_f"
                              placeholder="Enter home address"
                              value={
                                userData && userData.homeAddress
                                  ? userData.homeAddress.address
                                  : ""
                              }
                            />
                          </div>
                          <div className="u_inner_data_container u_inner_data_container_adress">
                            <label>Phone&nbsp;:&nbsp;</label>
                            <input
                              name="homePhone"
                              type="text"
                              className="u_f_v u_i_f"
                              placeholder="Enter home phone"
                              value={
                                userData && userData.homeAddress
                                  ? userData.homeAddress.phone
                                  : ""
                              }
                            />
                          </div>
                          <div className="u_inner_data_container u_inner_data_container_adress">
                            <label>Mobile&nbsp;:&nbsp;</label>
                            <input
                              name="homeMobile"
                              type="text"
                              className="u_f_v u_i_f"
                              placeholder="Enter home mobile"
                              value={
                                userData && userData.homeAddress
                                  ? userData.homeAddress.mobile
                                  : ""
                              }
                            />
                          </div>
                          <div className="u_inner_data_container u_inner_data_container_adress">
                            <label>Email&nbsp;:&nbsp;</label>
                            <input
                              name="homeEmail"
                              type="text"
                              className="u_f_v u_i_f"
                              placeholder="Enter home email"
                              value={
                                userData && userData.homeAddress
                                  ? userData.homeAddress.email
                                  : ""
                              }
                            />
                          </div>
                        </div>

                        <div className="u_adress_container china_adress">
                          <p>China (if anyone in China)</p>
                          <div className="u_inner_data_container u_inner_data_container_adress">
                            <label>Address&nbsp;:&nbsp;</label>
                            <input
                              name="chinaAddress"
                              type="text"
                              className="u_f_v u_i_f"
                              placeholder="Enter China address"
                              value={
                                userData && userData.chinaAddress
                                  ? userData.chinaAddress.address
                                  : ""
                              }
                            />
                          </div>
                          <div className="u_inner_data_container u_inner_data_container_adress">
                            <label>Phone&nbsp;:&nbsp;</label>
                            <input
                              name="chinaPhone"
                              type="text"
                              className="u_f_v u_i_f"
                              placeholder="Enter China phone"
                              value={
                                userData && userData.chinaAddress
                                  ? userData.chinaAddress.phone
                                  : ""
                              }
                            />
                          </div>
                          <div className="u_inner_data_container u_inner_data_container_adress">
                            <label>Mobile&nbsp;:&nbsp;</label>
                            <input
                              name="chinaMobile"
                              type="text"
                              className="u_f_v u_i_f"
                              placeholder="Enter China mobile"
                              value={
                                userData && userData.chinaAddress
                                  ? userData.chinaAddress.mobile
                                  : ""
                              }
                            />
                          </div>
                          <div className="u_inner_data_container u_inner_data_container_adress">
                            <label>Email&nbsp;:&nbsp;</label>
                            <input
                              name="chinaEmail"
                              type="text"
                              className="u_f_v u_i_f"
                              placeholder="Enter China email"
                              value={
                                userData && userData.chinaAddress
                                  ? userData.chinaAddress.email
                                  : ""
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u_container_content languages">
                  <h2 className="u_container_heading">Languages</h2>
                  <div className="u_data_container language_container u_form_details_grid">
                    <div className="u_field">
                      <label className="u_f_h">
                        First&nbsp;Language&nbsp;:&nbsp;
                      </label>
                      <input
                        name="firstLanguage"
                        type="text"
                        className="u_f_v u_i_f "
                        value={userData ? userData.firstLanguage : ""}
                      />
                    </div>
                    <div className="u_field">
                      <label className="u_f_h">
                        Other&nbsp;Language&nbsp;:&nbsp;
                      </label>
                      <input
                        name="otherLanguages"
                        type="text"
                        className="u_f_v u_i_f "
                        value={userData ? userData.otherLanguages : ""}
                      />
                    </div>
                    <div className="u_field u_field_question">
                      <label className="u_f_h" htmlFor="English Level">
                        What is your English Level&nbsp;?&nbsp;
                      </label>
                      <input
                        name="englishLevel"
                        type="text"
                        className="u_f_v u_i_f "
                        value={userData ? userData.englishLevel : ""}
                      />
                    </div>
                    <div className="u_field u_field_question u_checkbox">
                      <label className="u_f_h">
                        Have you sat any English test&nbsp;?&nbsp;
                      </label>
                      <div className="u_checkbox_inner_containers">
                        {EnglishTestsEnum.map((test, index) => (
                          <div
                            key={index}
                            className="u_inner_data_container u_checkbox_inner_container"
                          >
                            <label htmlFor={test.toLowerCase()}>{test}</label>
                            <input
                              name={test.toLowerCase()}
                              type="checkbox"
                              className="u_f_v u_i_f"
                              checked={
                                userData && userData.passedEnglishTests
                                  ? userData.passedEnglishTests.includes(test)
                                  : false
                              }
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u_container_content study">
                  <h2 className="u_container_heading">Study</h2>
                  <div className="u_data_container language_container u_form_details_grid">
                    <div className="u_field u_field_question">
                      <label className="u_f_h">
                        Highest&nbsp;Qualification&nbsp;Level&nbsp;:&nbsp;
                      </label>
                      <input
                        name="highestQualification"
                        type="text"
                        className="u_f_v u_i_f "
                        value={userData ? userData.qualificationLevel : ""}
                      />
                    </div>

                    <div className="u_field u_field_question">
                      <label className="u_f_h">
                        School&nbsp;Information&nbsp;:&nbsp;
                      </label>
                      <textarea name="schoolInfo" id="">
                        {userData ? userData.schoolInfo : ""}
                      </textarea>
                    </div>
                    <div className="u_field u_field_question">
                      <label className="u_f_h">
                        College&nbsp;Information&nbsp;:&nbsp;
                      </label>
                      <textarea name="collegeInfo">
                        {userData ? userData.collegeInfo : ""}
                      </textarea>
                    </div>
                  </div>
                </div>
                <div className="u_container_content course">
                  <h2 className="u_container_heading">Course Inforamtion</h2>
                  <div className="u_data_container language_container u_form_details_grid">
                    <div className="u_field">
                      <label className="u_f_h">
                        Campus&nbsp;Site&nbsp;:&nbsp;
                      </label>
                      <input
                        name="campusSite"
                        type="text"
                        className="u_f_v u_i_f "
                        value={userData ? userData.campusSite : ""}
                      />
                    </div>
                    <div className="u_field">
                      <label className="u_f_h">
                        Course&nbsp;Name&nbsp;:&nbsp;
                      </label>
                      <input
                        name="courseName"
                        type="text"
                        className="u_f_v u_i_f "
                        value={userData ? userData.courseName : ""}
                      />
                    </div>
                    <div className="u_field">
                      <label className="u_f_h">
                        Course&nbsp;Start&nbsp;Date&nbsp;:&nbsp;
                      </label>
                      <input
                        name="courseStartDate"
                        type="date"
                        className="u_f_v u_i_f "
                        value={
                          userData && userData.courseStartDate
                            ? userData.courseStartDate.slice(0, 10)
                            : ""
                        }
                      />
                    </div>
                    <div className="u_field">
                      <label className="u_f_h">
                        Course&nbsp;End&nbsp;Date&nbsp;:&nbsp;
                      </label>
                      <input
                        name="courseEndDate"
                        type="date"
                        className="u_f_v u_i_f "
                        value={
                          userData && userData.courseEndDate
                            ? userData.courseEndDate.slice(0, 10)
                            : ""
                        }
                      />
                    </div>
                    <div className="u_field">
                      <label className="u_f_h">
                        Course&nbsp;Study&nbsp;Weeks&nbsp;:&nbsp;
                      </label>
                      <input
                        name="courseStudyWeeks"
                        type="text"
                        className="u_f_v u_i_f "
                        value={userData ? userData.courseStudyWeeks : ""}
                      />
                    </div>
                    <div className="u_field">
                      <label className="u_f_h">
                        Interested&nbsp;Fields&nbsp;:&nbsp;
                      </label>
                      <input
                        name="interestedFields"
                        type="text"
                        className="u_f_v u_i_f "
                        value={userData ? userData.interestedField : ""}
                      />
                    </div>
                    <div className="u_field u_field_question">
                      <label className="u_f_h">
                        Study&nbsp;Time&nbsp;:&nbsp;
                      </label>
                      <input
                        name="studyTime"
                        type="text"
                        className="u_f_v u_i_f "
                        value={userData ? userData.studyTime : ""}
                      />
                    </div>
                    <div className="u_field u_field_question">
                      <label className="u_f_h">
                        What you will gonna do after course&nbsp;?&nbsp;
                      </label>
                      <textarea
                        name="afterCoursePlans"
                        className="u_f_v u_i_f "
                      >
                        {userData ? userData.careerPlans : ""}
                      </textarea>
                    </div>
                  </div>
                </div>
                <div className="u_container_content qna">
                  <h2 className="u_container_heading">
                    Questions About Yourself
                  </h2>
                  <div className="u_data_container qna_container u_form_details_grid">
                    <div className="u_field u_field_question">
                      <label className="u_f_h">
                        Do you have any medical Disability&nbsp;?&nbsp;
                      </label>
                      <div className="u_question_checkbox">
                        <div className="u_inner_data_container">
                          <label htmlFor="medicalDisYes">Yes</label>
                          <input
                            name="medicalDisYes"
                            type="checkbox"
                            className="u_f_v u_i_f"
                            checked={
                              userData &&
                              userData.medicalDisability &&
                              userData.medicalDisability.answer === "Yes"
                            }
                          />
                        </div>
                        <div className="u_inner_data_container">
                          <label htmlFor="medicalDisNO">No</label>
                          <input
                            name="medicalDisNO"
                            type="checkbox"
                            className="u_f_v u_i_f"
                            checked={
                              userData &&
                              userData.medicalDisability &&
                              userData.medicalDisability.answer === "No"
                            }
                          />
                        </div>
                      </div>
                      {userData &&
                        userData.medicalDisability &&
                        userData.medicalDisability.answer === "Yes" && (
                          <div className="u_inner_data_container">
                            <label
                              htmlFor="medicalDisabilityExplain"
                              className="answerYes"
                            >
                              Medical&nbsp;Disability
                            </label>
                            <textarea
                              name="medicalDisabilityExplain"
                              type="text"
                              className="u_f_v u_i_f"
                              defaultValue={
                                userData.medicalDisability.explanation
                              }
                            />
                          </div>
                        )}
                    </div>

                    <div className="u_field u_field_question">
                      <label className="u_f_h">
                        Are you applying through applicant&nbsp;?&nbsp;
                      </label>
                      <div className="u_question_checkbox">
                        <div className="u_inner_data_container">
                          <label htmlFor="applicantYes">Yes</label>
                          <input
                            name="applicant"
                            id="applicantYes"
                            type="checkbox"
                            className="u_f_v u_i_f"
                            checked={
                              userData && userData.applicantAgent === "Yes"
                            }
                            // Check if userData exists and if applicantAgent is "Yes"
                          />
                        </div>
                        <div className="u_inner_data_container">
                          <label htmlFor="applicantNo">No</label>
                          <input
                            name="applicant"
                            id="applicantNo"
                            type="checkbox"
                            className="u_f_v u_i_f"
                            checked={
                              userData && userData.applicantAgent === "No"
                            }
                            // Check if userData exists and if applicantAgent is "No"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="u_field">
                      <label className="u_f_h">
                        Applicant&nbsp;Email&nbsp;:&nbsp;
                      </label>
                      <input
                        name="applicantEmail"
                        type="text"
                        className="u_f_v u_i_f personalEmail"
                        value={
                          userData && userData.applicantEmail
                            ? userData.applicantEmail
                            : "Not applying through agent"
                        }
                        // If applicantEmail exists, display its value. Otherwise, display "Not applying through agent".
                      />
                    </div>

                    <div className="u_field u_field_question">
                      <label className="u_f_h">
                        How did you find us&nbsp;?&nbsp;
                      </label>
                      <textarea name="howwe" className="u_f_v u_i_f ">
                        {userData ? userData.howDidYouFindUs : ""}
                      </textarea>
                    </div>
                    <div className="u_field u_field_question">
                      <label className="u_f_h" htmlFor="ihExplain">
                        Your intrustsa and hobbbiess&nbsp;?&nbsp;
                      </label>
                      <textarea name="ihExplain" className="u_f_v u_i_f ">
                        {userData ? userData.interestedHobbies : ""}
                      </textarea>
                    </div>
                  </div>
                </div>
                <div className="u_container_content accommodations">
                  <h2 className="u_container_heading">Company Accommodation</h2>
                  <div className="u_data_container accommodation_container u_form_details_grid">
                    <div className="u_field u_field_question">
                      <label className="u_f_h">
                        Do you want the company to arrange your
                        accommodation&nbsp;?&nbsp;
                      </label>
                      <div className="u_question_checkbox">
                        <div className="u_inner_data_container">
                          <label htmlFor="companyAccommodationYes">Yes</label>
                          <input
                            name="companyAccommodation"
                            id="companyAccommodationYes"
                            type="checkbox"
                            className="u_f_v u_i_f"
                            checked={
                              userData &&
                              userData.companyAccommodation
                              === "Yes"
                            }
                            // Check if userData exists and if companyAccommodation is "Yes"
                          />
                        </div>
                        <div className="u_inner_data_container">
                          <label htmlFor="companyAccommodation">No</label>
                          <input
                            name="companyAccommodation"
                            id="companyAccommodation"
                            type="checkbox"
                            className="u_f_v u_i_f"
                            checked={
                              userData && userData.companyAccommodation
                              === "No"
                            }
                            // Check if userData exists and if companyAccommodation is "No"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="u_field u_field_question accommodation_criteria">
                      <div className="u_inner_data_container">
                        <label htmlFor="accommodationStartDate">
                          Accommodation Start Date
                        </label>
                        <input
                          name="accommodationStartDate"
                          type="date"
                          className="u_f_v u_i_f"
                          value={
                            userData && userData.accommodationStartDate
                              ? userData.accommodationStartDate.split("T")[0]
                              : ""
                          }
                          // If accommodationStartDate exists, display its value. Otherwise, display an empty string.
                        />
                      </div>
                      <div className="u_inner_data_container">
                        <label htmlFor="accommodationEndDate">
                          Accommodation End Date
                        </label>
                        <input
                          name="accommodationEndDate"
                          type="date"
                          className="u_f_v u_i_f"
                          value={
                            userData && userData.accommodationEndDate
                              ? userData.accommodationEndDate.split("T")[0]
                              : ""
                          }
                          // If accommodationEndDate exists, display its value. Otherwise, display an empty string.
                        />
                      </div>
                      <div className="u_inner_data_container">
                        <label htmlFor="accommodationStudyWeeeks">
                          Accommodation Study Weeks
                        </label>
                        <input
                          name="accommodationStudyWeeeks"
                          type="text"
                          className="u_f_v u_i_f"
                          value={
                            userData ? userData.accommodationStudyWeeks : ""
                          }
                          // If accommodationStudyWeeks exists, display its value. Otherwise, display an empty string.
                        />
                      </div>
                    </div>

                    <div className="u_field u_field_question">
                      <label htmlFor="accommodationOption">
                        Accomodation Option
                      </label>
                      <input
                        name="accommodationOption"
                        type="text"
                        className="u_f_v u_i_f "
                        value={userData ? userData.accommodationOptions : ""}
                      />
                    </div>
                    <div className="u_field u_field_question">
                      <label htmlFor="doyousmoke">Do You Smoke?</label>
                      <div className="u_question_checkbox">
                        <div className="u_inner_data_container">
                          <label htmlFor="smokingyes">Yes</label>
                          <input
                            name="smokingyes"
                            type="checkbox"
                            className="u_f_v u_i_f "
                            checked={userData && userData.smoke === "Yes"}
                          />
                        </div>
                        <div className="u_inner_data_container">
                          <label htmlFor="smokingno">No</label>
                          <input
                            name="smokingno"
                            type="checkbox"
                            className="u_f_v u_i_f "
                            checked={userData && userData.smoke === "No"}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="u_field u_field_question">
                      <label className="u_f_h">
                        Do you have to follow any specific diet&nbsp;?&nbsp;
                      </label>
                      <div className="u_question_checkbox">
                        <div className="u_inner_data_container">
                          <label htmlFor="dietYes">Yes</label>
                          <input
                            name="specificDiet"
                            id="dietYes"
                            type="checkbox"
                            className="u_f_v u_i_f"
                            checked={
                              userData && userData.specificDiet.answer === "Yes"
                            }
                            // Check if userData exists and if specificDiet answer is "Yes"
                          />
                        </div>
                        <div className="u_inner_data_container">
                          <label htmlFor="dietNo">No</label>
                          <input
                            name="specificDiet"
                            id="dietNo"
                            type="checkbox"
                            className="u_f_v u_i_f"
                            checked={
                              userData && userData.specificDiet.answer === "No"
                            }
                            // Check if userData exists and if specificDiet answer is "No"
                          />
                        </div>
                      </div>
                      {userData &&
                        userData.specificDiet.answer === "Yes" && ( // Display textarea if specificDiet answer is "Yes"
                          <div className="u_inner_data_container">
                            <label htmlFor="dietExplain" className="answerYes">
                              If yes, then details
                            </label>
                            <textarea
                              name="dietExplain"
                              type="text"
                              className="u_f_v u_i_f"
                              value={userData.specificDiet.diet}
                              // Display the value of specificDiet diet field if it exists
                            />
                          </div>
                        )}
                    </div>

                    <div className="u_field u_field_question">
                      <label className="u_f_h">
                        Do you mind living in a house that has pets&nbsp;?&nbsp;
                      </label>
                      <div className="u_question_checkbox">
                        <div className="u_inner_data_container">
                          <label htmlFor="petsyes">Yes</label>
                          <input
                            name="petsyes"
                            type="checkbox"
                            className="u_f_v u_i_f "
                            checked={
                              userData && userData.petsIssue.answer === "Yes"
                            }
                          />
                        </div>
                        <div className="u_inner_data_container">
                          <label htmlFor="petsno">No</label>
                          <input
                            name="petsno"
                            type="checkbox"
                            className="u_f_v u_i_f "
                            checked={
                              userData && userData.petsIssue.answer === "No"
                            }
                          />
                        </div>
                      </div>
                      {userData && userData.petsIssue.answer === "Yes" && (
                        <div className="u_inner_data_container">
                          <label
                            htmlFor="medicalDisabilityExplain"
                            className="answerYes"
                          >
                            If yes then details
                          </label>
                          <textarea
                            name="petsExplain"
                            type="text"
                            className="u_f_v u_i_f "
                            value={userData.petsIssue.pets}
                          ></textarea>
                        </div>
                      )}
                    </div>
                    <div className="u_field u_field_question">
                      <label className="u_f_h">
                        Are there any foods that you cant eat&nbsp;?&nbsp;
                      </label>
                      <div className="u_question_checkbox">
                        <div className="u_inner_data_container">
                          <label htmlFor="foodsyes">Yes</label>
                          <input
                            name="foodsyes"
                            type="checkbox"
                            className="u_f_v u_i_f "
                            checked={
                              userData && userData.foodsCantEat.answer === "Yes"
                            }
                          />
                        </div>
                        <div className="u_inner_data_container">
                          <label htmlFor="foodsno">No</label>
                          <input
                            name="foodsno"
                            type="checkbox"
                            className="u_f_v u_i_f "
                            checked={
                              userData && userData.foodsCantEat.answer === "No"
                            }
                          />
                        </div>
                      </div>
                      {userData && userData.foodsCantEat.answer === "Yes" && (
                        <div className="u_inner_data_container">
                          <label
                            htmlFor="medicalDisabilityExplain"
                            className="answerYes"
                          >
                            If yes then details
                          </label>
                          <textarea
                            name="foodsExplain"
                            type="text"
                            className="u_f_v u_i_f "
                            value={userData.foodsCantEat.foods}
                          ></textarea>
                        </div>
                      )}
                    </div>
                    <div className="u_field u_field_question">
                      <label className="u_f_h">
                        Are you allergic to any food or animal&nbsp;?&nbsp;
                      </label>
                      <div className="u_question_checkbox">
                        <div className="u_inner_data_container">
                          <label htmlFor="allergyyes">Yes</label>
                          <input
                            name="allergyyes"
                            type="checkbox"
                            className="u_f_v u_i_f "
                            checked={
                              userData &&
                              userData.allergicFoodsPets.answer === "Yes"
                            }
                          />
                        </div>
                        <div className="u_inner_data_container">
                          <label htmlFor="allergyno">No</label>
                          <input
                            name="allergyno"
                            type="checkbox"
                            className="u_f_v u_i_f "
                            checked={
                              userData &&
                              userData.allergicFoodsPets.answer === "No"
                            }
                          />
                        </div>
                      </div>
                      {userData &&
                        userData.allergicFoodsPets.answer === "Yes" && (
                          <div className="u_inner_data_container">
                            <label
                              htmlFor="medicalDisabilityExplain"
                              className="answerYes"
                            >
                              If yes then details
                            </label>
                            <textarea
                              name="allergyExplain"
                              type="text"
                              className="u_f_v u_i_f "
                              value={userData.allergicFoodsPets.allergies}
                            ></textarea>
                          </div>
                        )}
                    </div>
                    <div className="u_field u_field_question">
                      <label className="u_f_h">
                        Are you suffering from any medical
                        condition&nbsp;?&nbsp;
                      </label>
                      <div className="u_question_checkbox">
                        <div className="u_inner_data_container">
                          <label htmlFor="medicalyes">Yes</label>
                          <input
                            name="medicalyes"
                            type="checkbox"
                            className="u_f_v u_i_f "
                            checked={
                              userData &&
                              userData.sufferingMedicalCondition.answer ===
                                "Yes"
                            }
                          />
                        </div>

                        <div className="u_inner_data_container">
                          <label htmlFor="medicalno">No</label>
                          <input
                            name="medicalno"
                            type="checkbox"
                            className="u_f_v u_i_f "
                            checked={
                              userData &&
                              userData.sufferingMedicalCondition.answer === "No"
                            }
                          />
                        </div>
                      </div>

                      {userData &&
                        userData.sufferingMedicalCondition.answer === "Yes" && (
                          <div className="u_inner_data_container">
                            <label
                              htmlFor="medicalDisabilityExplain"
                              className="answerYes"
                            >
                              If yes then details
                            </label>
                            <textarea
                              name="medicalExplain"
                              type="text"
                              className="u_f_v u_i_f "
                              value={
                                userData.sufferingMedicalCondition.condition
                              }
                            ></textarea>
                          </div>
                        )}
                    </div>
                    <div className="u_field u_field_question">
                      <label className="u_f_h">
                        Do you mind if other international students family live
                        with you&nbsp;?&nbsp;
                      </label>
                      <div className="u_question_checkbox">
                        <div className="u_inner_data_container">
                          <label htmlFor="otherYes">Yes</label>
                          <input
                            name="otherYes"
                            type="checkbox"
                            className="u_f_v u_i_f "
                            checked={
                              userData &&
                              userData.mindInternationalFamily.answer === "Yes"
                            }
                          />
                        </div>
                        <div className="u_inner_data_container">
                          <label htmlFor="otherNo">No</label>
                          <input
                            name="otherNo"
                            type="checkbox"
                            className="u_f_v u_i_f "
                            checked={
                              userData &&
                              userData.mindInternationalFamily.answer === "No"
                            }
                          />
                        </div>
                      </div>
                      {userData &&
                        userData.mindInternationalFamily.answer === "Yes" && (
                          <div className="u_inner_data_container">
                            <label
                              htmlFor="accommodationquestionExplain"
                              className="answerYes"
                            >
                              If yes then details
                            </label>
                            <textarea
                              name="otehrExplain"
                              type="text"
                              className="u_f_v u_i_f "
                              value={
                                userData.mindInternationalFamily.familyType
                              }
                            ></textarea>
                          </div>
                        )}
                    </div>
                    <div className="u_field u_field_question">
                      <label className="u_f_h">
                        Do you have any other question about
                        accommodation&nbsp;?&nbsp;
                      </label>
                      <div className="u_question_checkbox">
                        <div className="u_inner_data_container">
                          <label htmlFor="accommodationquestionYes">Yes</label>
                          <input
                            name="accommodationquestionYes"
                            type="checkbox"
                            className="u_f_v u_i_f "
                            checked={
                              userData &&
                              userData.accommodationQuestions.answer === "Yes"
                            }
                          />
                        </div>
                        <div className="u_inner_data_container">
                          <label htmlFor="accommodationquestionYes">No</label>
                          <input
                            name="accommodationquestionYes"
                            type="checkbox"
                            className="u_f_v u_i_f "
                            checked={
                              userData &&
                              userData.accommodationQuestions.answer === "No"
                            }
                          />
                        </div>
                      </div>
                      {userData &&
                        userData.accommodationQuestions.answer === "Yes" && (
                          <div className="u_inner_data_container">
                            <label
                              htmlFor="accommodationquestionExplain"
                              className="answerYes"
                            >
                              If yes then details
                            </label>
                            <textarea
                              name="accommodationQuestionsExplain"
                              type="text"
                              className="u_f_v u_i_f "
                              value={userData.accommodationQuestions.questions}
                            ></textarea>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserDetails;
