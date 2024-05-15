import React from "react";
import { useState } from "react";
import "./UserForm.css";
import "bootstrap/dist/css/bootstrap.css";
const UserForm = () => {
  const [activeBox, setActiveBox] = useState("box1");

  const handleClick = (boxId) => {
    setActiveBox(boxId);
  };
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [formData, setFormData] = useState({
    applicationDate: new Date().toISOString(),
    image: "",
    firstName: "",
    familyName: "",
    personalCnic: "",
    personalEmail: "",
    personalMobile: "",
    personalPhone: "",
    personalDateOfBirth: "",
    gender: "",
    citizenshipCountry: "",
    presentOccupation: "",
    visa: "",
    passportNumber: "",
    passportExpiry: "",
    homeAddress: {
      address: "",
      phone: "",
      mobile: "",
      email: "",
    },
    chinaAddress: {
      address: "",
      phone: "",
      mobile: "",
      email: "",
    },
    firstLanguage: "",
    otherLanguages: "",
    englishLevel: "",
    passedEnglishTests: [],
    qualificationLevel: "",
    schoolInfo: "",
    collegeInfo: "",
    campusSite: "",
    courseName: "",
    courseStartDate: "",
    courseEndDate: "",
    courseStudyWeeks: "",
    interestedField: "",
    studyTime: "",
    careerPlans: "",
    medicalDisability: {
      answer: "",
      explanation: "",
    },
    applicantAgent: "",
    applicantEmail: "",
    howDidYouFindUs: "",
    interestedHobbies: "",
    companyAccommodation: "",
    accommodationStartDate: "",
    accommodationEndDate: "",
    accommodationStudyWeeks: "",
    accommodationOptions: "",
    smoke: "",
    specificDiet: {
      answer: "",
      diet: "",
    },
    petsIssue: {
      answer: "",
      pets: "",
    },
    foodsCantEat: {
      answer: "",
      foods: "",
    },
    allergicFoodsPets: {
      answer: "",
      allergies: "",
    },
    sufferingMedicalCondition: {
      answer: "",
      condition: "",
    },
    mindInternationalFamily: {
      answer: "",
      familyType: "",
    },
    accommodationQuestions: {
      answer: "",
      questions: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/adduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("User added successfully with ID:", data.id);
      // Optionally, you can reset the form fields after successful submission
      setFormData({
        /* Reset form fields */
      });
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="apply mt-3">
          <h1>Apply online</h1>
        </div>
        <div className="country">
          <div
            className={`${"Asia"}  ${activeBox === "box1" ? "active" : ""}`}
            onClick={() => handleClick("box1")}
          >
            China
          </div>
          {/* <span>/</span> */}
          <div
            className={`${"othercoun"} ${activeBox === "box2" ? "active" : ""}`}
            onClick={() => handleClick("box2")}
          >
            Other Country
          </div>
        </div>
        <form className="wraper " onSubmit={handleSubmit}>
          {activeBox === "box1" && (
            <>
              <div className="heading fw-bold p-2 fs-5 opacity-75">
                Personal Information
              </div>
              <div className="form-control p-4">
                <div className="row ">
                  <div className="left col-md-12 col-lg-8">
                    <div className="row">
                      <div class={`${"group gap-2 col-lg-6"} ${"name"}`}>
                        <input
                          type="text"
                          name="firstName"
                          className="w-100 b_input"
                        //   required="required"
                          value={formData.firstName}
                          onChange={handleChange}
                        />

                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label className="b_label">
                          First Name <span>*</span>
                        </label>
                      </div>
                      <div class={`${"group  gap-2 col-lg-6"} ${"name"}`}>
                        <input
                          type="text"
                          name="s_name"
                          className="w-100 b_input"
                        //   required="required"
                        />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label className="b_label">
                          Family Name <span>*</span>
                        </label>
                      </div>

                      <div class={`${"group gap-2 col-lg-12"} ${"email"}`}>
                        <input
                          type="text"
                          name="email"
                          className="w-100 b_input"
                        //   required="required"
                        />
                        <span class="highlight "></span>
                        <span className=" bar"></span>
                        <label className="b_label">
                          Email <span>*</span>
                        </label>
                      </div>
                      <div class={`${"group gap-2 col-lg-12"} ${"phone"}`}>
                        <input
                          type="text"
                          name="phone"
                          className="w-100 b_input"
                        //   required="no"
                        />
                        <span class="highlight "></span>
                        <span className=" bar"></span>
                        <label className="b_label">Phone Number</label>
                      </div>
                      <div class={`${"group gap-2 col-lg-12"} ${"mobile"}`}>
                        <input
                          type="text"
                          name="phone"
                          className="w-100 b_input"
                        //   required="no"
                        />
                        <span class="highlight "></span>
                        <span className=" bar"></span>
                        <label className="b_label">Mobile Number</label>
                      </div>
                      <div class={`${"group gap-2 col-lg-12"} ${"cnic"}`}>
                        <input
                          type="text"
                          name="cnic"
                          className="w-100 b_input"
                        //   required="required"
                        />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label className="b_label">
                          CNIC No <span>*</span>
                        </label>
                      </div>
                      <div class={`${"group gap-2 col-lg-12"} ${"dob"}`}>
                        <input type="date" name="dob" className="w-100 b_input" />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label className="b_label">
                          Date of Birth<span>*</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="right col-lg-4 col-md-12 ">
                    <div className="group gap-2 col-lg-4">
                      <div className="image-box overflow-hidden d-none d-lg-block">
                        {/* Placeholder for uploaded image */}
                        {uploadedImage && (
                          <img src={uploadedImage} alt="Uploaded" />
                        )}
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-100 mb-2 b_input"
                      />
                    </div>
                  </div>

                  <div class={`${"group gap-2 col-lg-3"} ${"passport"}`}>
                    <input
                      type="text"
                      name="passport"
                    //   required="required"
                      className="w-100 b_input"
                    />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label className="b_label">
                      Passport Number<span>*</span>
                    </label>
                  </div>
                  <div class={`${"group gap-2 col-lg-3"} ${"passport"}`}>
                    <input
                      type="text"
                      name="passport"
                    //   required="required"
                      className="w-100 b_input"
                    />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label className="b_label">
                      Passport Expiry<span>*</span>
                    </label>
                  </div>
                  <div class={`${"group gap-2 col-lg-6"} ${"ocupation"}`}>
                    <input
                      type="text"
                      name="ocupation"
                    //   required="required"
                      className="w-100 b_input"
                    />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label className="b_label">
                      Present Occupation<span>*</span>
                    </label>
                  </div>
                  <div class={`${"group gap-2 col-lg-6"} ${"address"}`}>
                    <input
                      type="text"
                      name="address"
                      className="w-100 b_input"
                    //   required="required"
                    />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label className="b_label">
                      Address <span>*</span>
                    </label>
                  </div>
                  <div class={`${"group gap-2 col-lg-6"} ${"gender"}`}>
                    <select name="gender" className="w-100" id="gender">
                      <option value="select" hidden>
                        Select Your Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="femail">Femail</option>
                    </select>
                  </div>
                  <div class={`${"group gap-2 col-lg-6"} ${"address"}`}>
                    <input
                      type="text"
                      name="address"
                      className="w-100 b_input"
                    //   required="required"
                    placeholder="fsd / pakistan"

                    />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label className="b_label">
                      Citizenship / Country <span>*</span>
                    </label>
                  </div>
                  <div class={`${"group mb-3 col-lg-6"} ${"visatype"}`}>
                    <select name="visatype" className="w-100" id="visatype">
                      <option value="select" hidden>
                        Visa Type
                      </option>
                      <option value="pak">Student Visa</option>
                      <option value="india">Work Visa</option>
                      <option value="china">Parent Visa</option>
                      <option value="russia">Permanent Resident Cart</option>
                    </select>
                  </div>
                  <div class={`${"group gap-2  col-lg-6"} ${"visatype"}`}>
                    <div className="form-control pikora">
                      <h1 className="homeaddreheading">Home Address</h1>
                      <div className="row">
                        <div class={`${"group gap-2 col-lg-6"} ${"address"}`}>
                          <input
                            type="text"
                            name="address"
                            className="w-100 b_input"
                            // required="required"
                          />
                          <span class="highlight"></span>
                          <span class="bar"></span>
                          <label className="b_label">
                            Address <span>*</span>
                          </label>
                        </div>
                        <div class={`${"group gap-2 col-lg-6"} ${"number"}`}>
                          <input
                            type="text"
                            name="number"
                            className="w-100 b_input"
                            // required="required"
                          />
                          <span class="highlight"></span>
                          <span class="bar"></span>
                          <label className="b_label">
                            Mobile Number <span>*</span>
                          </label>
                        </div>
                        <div class={`${"group gap-2 col-lg-6"} ${"email"}`}>
                          <input
                            type="text"
                            name="email"
                            className="w-100 b_input"
                            // required="required"
                          />
                          <span class="highlight"></span>
                          <span class="bar"></span>
                          <label className="b_label">
                            email <span>*</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class={`${"group gap-2  col-lg-6"} ${"visatype"}`}>
                    <div className="form-control pikora">
                      <h1 className="homeaddreheading">China Address</h1>
                      <div className="row">
                        <div class={`${"group gap-2 col-lg-6"} ${"address"}`}>
                          <input
                            type="text"
                            name="address"
                            className="w-100 b_input"
                            // required="required"
                          />
                          <span class="highlight"></span>
                          <span class="bar"></span>
                          <label className="b_label">
                            Address <span>*</span>
                          </label>
                        </div>
                        <div class={`${"group gap-2 col-lg-6"} ${"number"}`}>
                          <input
                            type="text"
                            name="number"
                            className="w-100 b_input"
                            // required="required"
                          />
                          <span class="highlight"></span>
                          <span class="bar"></span>
                          <label className="b_label">
                            Mobile Number <span>*</span>
                          </label>
                        </div>
                        <div class={`${"group gap-2 col-lg-6"} ${"email"}`}>
                          <input
                            type="text"
                            name="email"
                            className="w-100 b_input"
                            // required="required"
                          />
                          <span class="highlight"></span>
                          <span class="bar"></span>
                          <label className="b_label">
                            email <span>*</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" mt-5 heading fw-bold p-2 fs-5 opacity-75">
                LANGUAGE
              </div>
              <div className="form-control p-4">
                <div className="row ">
                  <div class={`${"group  gap-2 col-lg-6"} ${"language"}`}>
                    {/* <input type="text" className="w-100" required="required" /> */}
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label className="b_label">
                      First Language <span>*</span>
                    </label>
                  </div>
                  <div class={`${"group gap-2 col-lg-6"} ${"olanguage"}`}>
                    {/* <input type="text" className="w-100" required="required" /> */}
                    <span class="highlight "></span>
                    <span className=" bar"></span>
                    <label className="b_label">Other Language</label>
                  </div>
                  <div class={`${"group gap-2 col-lg-6"} ${"phone"}`}>
                    {/* <input type="text" className="w-100" required="required" /> */}
                    <span class="highlight "></span>
                    <span className=" bar"></span>
                    <label className="b_label">
                      Major/Area of Study <span>*</span>
                    </label>
                  </div>
                  <div class={`${"group mb-2 col-lg-6"} ${"englislvl"}`}>
                    <select
                      id="english-level"
                      className="w-100"
                      name="english-level"
                    >
                      <option hidden>English Level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <div class={`${"group mb-2 col-lg-6"} ${"englishtst"}`}>
                    <select id="englishtst" className="w-100" name="englishtst">
                      <option hidden>Have you sat any English Test</option>
                      <option value="IELTS">IELTS</option>
                      <option value="TOEFL">TOEFL</option>
                      <option value="SAT">SAT</option>
                      <option value="PTE">PTE</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className=" mt-5 heading fw-bold p-2 fs-5 opacity-75">
                STUDY
              </div>
              <div className="form-control p-4">
                <div className="row ">
                  <div class={`${"group mb-2 col-lg-6"} ${"studylevl"}`}>
                    <select id="studylevl" className="w-100" name="studylevl">
                      <option hidden>Select Highest Qualification Level</option>
                      <option value="School">School</option>
                      <option value="College">College</option>
                      <option value="University">University</option>
                    </select>
                  </div>
                  <div class={`${"group gap-2 col-lg-6"} ${"schoolinfo"}`}>
                    {/* <input type="text" className="w-100" required="required" /> */}
                    <span class="highlight "></span>
                    <span className=" bar"></span>
                    <label className="b_label">School Information</label>
                  </div>
                  <div class={`${"group gap-2 col-lg-6"} ${"schoolinfo"}`}>
                    {/* <input type="text" className="w-100" required="required" /> */}
                    <span class="highlight "></span>
                    <span className=" bar"></span>
                    <label className="b_label">College Information</label>
                  </div>
                </div>
              </div>
              <div className=" mt-5 heading fw-bold p-2 fs-5 opacity-75">
                COURSE:
              </div>
              <div className="form-control p-4">
                <div className="row ">
                  <div class={`${"group mb-2 col-lg-6"} ${"campusSel mb-3"}`}>
                    <select id="campusSel" className="w-100" name="campusSel">
                      <option hidden>Campus Site</option>
                      <option value="dummy">dummy a</option>
                      <option value="dummy">dummy a</option>
                      <option value="dummy">dummy a</option>
                    </select>
                  </div>
                  <div class={`${"group mb-2 col-lg-6"} ${"campusname"}`}>
                    <select id="campusname" className="w-100" name="campusname">
                      <option hidden>Campus Site</option>
                      <option value="dummy">dummy a</option>
                      <option value="dummy">dummy a</option>
                      <option value="dummy">dummy a</option>
                    </select>
                  </div>

                  <div class={`${"group gap-2 col-lg-6"} ${"courstartdate"}`}>
                    <input type="date" className="w-100 b_input" />
                    <span class="highlight "></span>
                    <span className=" bar"></span>
                    <label className="b_label">Course Start Date</label>
                  </div>
                  <div class={`${"group gap-2 col-lg-6"} ${"coursenddate"}`}>
                    <input type="date" className="w-100 b_input" />
                    <span class="highlight "></span>
                    <span className=" bar"></span>
                    <label className="b_label">Course End Date</label>
                  </div>
                  <div class={`${"group gap-2 col-lg-6"} ${"studyweeks"}`}>
                    {/* <input type="input" required="required" className="w-100" /> */}
                    <span class="highlight "></span>
                    <span className=" bar"></span>
                    <label className="b_label">Course Study Weeks</label>
                  </div>
                  <div class={`${"group gap-2 col-lg-6"} ${"intstdfields"}`}>
                    {/* <input type="input" required="required" className="w-100" /> */}
                    <span class="highlight "></span>
                    <span className=" bar"></span>
                    <label className="b_label">Intrested Fields</label>
                  </div>
                  <div class={`${"group mb-2 col-lg-6"} ${"studytime"}`}>
                    <select id="studytime" className="w-100" name="studytime">
                      <option hidden>Study Time</option>
                      <option value="Full-time ">Full-time </option>
                      <option value="Part-time">Part-time</option>
                      <option value="Evening-classes">Evening classes</option>
                      <option value="Weekend-classes">Weekend classes</option>
                      <option value="Flexible-schedule">
                        Flexible schedule
                      </option>
                      <option value="Online/distance-learning">
                        Online/distance learning
                      </option>
                    </select>
                  </div>
                  <div class={`${"group gap-2 col-lg-6"} ${"intrests"}`}>
                    {/* <input type="input" required="required" className="w-100" /> */}
                    <span class="highlight "></span>
                    <span className=" bar"></span>
                    <label className="b_label">What you will gona do after course/</label>
                  </div>
                </div>
              </div>
              <div className=" mt-5 heading fw-bold p-2 fs-5 opacity-75">
                OTHER QUEATIONS ABOUT YOURSELF
              </div>
              <div className="form-control p-4">
                <div className="row ">
                  <div class={`${"group mb-2 col-lg-6"} ${"medical"}`}>
                    <select id="medical" className="w-100" name="medical">
                      <option hidden>Do you have any medical disability</option>{" "}
                      <option value="Full-time ">Yes </option>
                      <option value="Part-time">No</option>
                    </select>
                  </div>
                  <div class={`${"group mb-2 col-lg-6"} ${"applyingMethod"}`}>
                    <select
                      id="applyingMethod"
                      className="w-100"
                      name="applyingMethod"
                    >
                      <option hidden>Are you applying through agent</option>
                      <option value="Full-time ">Yes </option>
                      <option value="Part-time">No</option>
                    </select>
                  </div>
                  <div class={`${"group gap-2 col-lg-6"} ${"Applicant_Email"}`}>
                    {/* <input type="text" className="w-100" required="required" /> */}
                    <span class="highlight "></span>
                    <span className=" bar"></span>
                    <label className="b_label">Applicant Email</label>
                  </div>
                  <div class={`${"group mb-2 col-lg-6"} ${"Howufindus"}`}>
                    <select id="Howufindus" className="w-100" name="Howufindus">
                      <option hidden>How did you find us</option>
                      <option value="beginner">Social Media</option>
                      <option value="intermediate">Through Friends</option>
                      <option value="advanced">Others</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className=" mt-5 heading fw-bold p-2 fs-5 opacity-75">
                COMPANY ACCOMODATION
              </div>
              <div className="form-control p-4">
                <div className="row ">
                  <div class={`${"group mb-2 col-lg-6"} ${"accommodation"}`}>
                    <select
                      id="accommodation"
                      className="w-100"
                      name="accommodation"
                    >
                      <option hidden>
                        DO you want company to do your accommodation
                      </option>
                      <option value="Full-time ">Yes </option>
                      <option value="Part-time">No</option>
                    </select>
                  </div>
                  <div
                    class={`${"group gap-2 col-lg-6"} ${"Accommodationsate"}`}
                  >
                    <input type="date" className="w-100 b_input" />
                    <span class="highlight "></span>
                    <span className=" bar"></span>
                    <label className="b_label">Accommodation Start Date</label>
                  </div>
                  <div
                    class={`${"group gap-2 col-lg-6"} ${"Accommodationsate"}`}
                  >
                    <input type="date" className="w-100 b_input" />
                    <span class="highlight "></span>
                    <span className=" bar"></span>
                    <label className="b_label">Accommodation End Date</label>
                  </div>
                  <div
                    class={`${"group gap-2 col-lg-6"} ${"Accommodationstudy"}`}
                  >
                    {/* <input type="input" required="required" className="w-100" /> */}
                    <span class="highlight "></span>
                    <span className=" bar"></span>
                    <label className="b_label">Accommodation Study Weeks</label>
                  </div>
                  <div class={`${"group mb-2 col-lg-6"} ${"usmoke"}`}>
                    <select id="usmoke" className="w-100" name="usmoke">
                      <option hidden>Do you smoke</option>
                      <option value="Full-time ">Yes </option>
                      <option value="Part-time">No</option>
                    </select>
                  </div>
                  <div class={`${"group mb-2 col-lg-6"} ${"questions"}`}>
                    <select
                      id="questions"
                      className="w-100"
                      name="questions
                    "
                    >
                      <option hidden>
                        Do you have any question about Accommodation{" "}
                      </option>
                      <option value="Full-time ">Yes </option>
                      <option value="Part-time">No</option>
                    </select>
                  </div>
                </div>
              </div>
              <button className="btnn" type="submit">
                Apply For Free Assesment
              </button>
            </>
          )}
          {activeBox === "box2" && <>Pikora</>}
        </form>
      </div>
    </>
  );
};

export default UserForm;
