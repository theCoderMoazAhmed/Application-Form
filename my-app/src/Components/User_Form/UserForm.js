import React from "react";
import { useState } from "react";
import "./UserForm.css";
import "bootstrap/dist/css/bootstrap.css";
const UserForm = () => {
  const [activeBox, setActiveBox] = useState("box1");

  const handleClick = (boxId) => {
    setActiveBox(boxId);
  };

  const [image, setImage] = useState("");
  // State and handleChange function for image
  const uploadImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append("product", file);

      const response = await fetch("http://localhost:4000/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data.image_url;
    } catch (error) {
      console.error("Error:", error);
      throw new Error("Image upload failed");
    }
  };
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    try {
      const imageUrl = await uploadImage(file);
      setImage(imageUrl);
    } catch (error) {
      // Handle error
      console.error("Error uploading image:", error);
    }
  };

  const [firstName, setFirstName] = useState("");
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const [familyName, setFamilyName] = useState("");
  const handleFamilyNameChange = (e) => {
    setFamilyName(e.target.value);
  };
  const [personalCnic, setPersonalCnic] = useState("");
  const handleCnicChange = (e) => {
    setPersonalCnic(e.target.value);
  };
  const [personalEmail, setPersonalEmail] = useState("");
  const handlePersonalEmailChange = (e) => {
    setPersonalEmail(e.target.value);
  };
  const [personalMobile, setPersonalMobile] = useState("");
  const handlePersonalMobileChange = (e) => {
    setPersonalMobile(e.target.value);
  };
  const [personalPhone, setPersonalPhone] = useState("");
  const handlePersonalPhoneChange = (e) => {
    setPersonalPhone(e.target.value);
  };
  const [personalDateOfBirth, setPersonalDateOfBirth] = useState("");
  const handlePersonalDateOfBirthChange = (e) => {
    setPersonalDateOfBirth(e.target.value);
  };
  const [gender, setGender] = useState("");
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const [citizenshipCountry, setCitizenshipCountry] = useState("");
  const handleCitizenshipCountryChange = (e) => {
    setCitizenshipCountry(e.target.value);
  };
  const [presentOccupation, setPresentOccupation] = useState("");
  const handlePresentOccupationChange = (e) => {
    setPresentOccupation(e.target.value);
  };
  const [visa, setVisa] = useState("");
  const VisaEnum = [
    "Student Visa",
    "Work Visa",
    "Parent Visa",
    "Permanent Residential Card",
  ];
  const handleVisaChange = (e) => {
    setVisa(e.target.value);
  };
  const [passportNumber, setPassportNumber] = useState("");
  const handlePassportNumberChange = (e) => {
    setPassportNumber(e.target.value);
  };
  const [passportExpiry, setPassportExpiry] = useState("");
  const handlePassportExpiryChange = (e) => {
    setPassportExpiry(e.target.value);
  };
  const [homeAddress, setHomeAddress] = useState({
    address: "",
    phone: "",
    mobile: "",
    email: "",
  });
  const handleHomeAddressChange = (e) => {
    const { name, value } = e.target;
    setHomeAddress({ ...homeAddress, [name]: value });
  };
  const [chinaAddress, setChinaAddress] = useState({
    address: "",
    phone: "",
    mobile: "",
    email: "",
  });
  const handleChinaAddressChange = (e) => {
    const { name, value } = e.target;
    setChinaAddress({ ...chinaAddress, [name]: value });
  };
  const [firstLanguage, setFirstLanguage] = useState("");
  const handleFirstLanguageChange = (e) => {
    setFirstLanguage(e.target.value);
  };
  const [otherLanguages, setOtherLanguages] = useState("");
  const handleOtherLanguageChange = (e) => {
    setOtherLanguages(e.target.value);
  };
  const [englishLevel, setEnglishLevel] = useState("");
  const handlEnglishLevelChange = (e) => {
    setEnglishLevel(e.target.value);
  };
  const [qualificationLevel, setQualificationLevel] = useState("");
  const handleQualificationLevelChange = (e) => {
    setQualificationLevel(e.target.value);
  };

  // LEFT
  const [passedEnglishTests, setPassedEnglishTests] = useState([]);
  const EnglishTestsEnum = ["PTE", "FCE", "CAE", "TOEIC", "IELTS", "NONE"];
  const handlePassedEnglishTestsChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setPassedEnglishTests((prevTests) => [...prevTests, value]);
    } else {
      setPassedEnglishTests((prevTests) =>
        prevTests.filter((test) => test !== value)
      );
    }
  };
  const [schoolInfo, setSchoolInfo] = useState("");
  const handleSchoolInfoChange = (e) => {
    setSchoolInfo(e.target.value);
  };
  const [collegeInfo, setCollegeInfo] = useState("");
  const handleCollegeInfoChange = (e) => {
    setCollegeInfo(e.target.value);
  };
  const [campusSite, setCampusSite] = useState("");
  const handleCampusSiteChange = (e) => {
    setCampusSite(e.target.value);
  };
  const [courseName, setCourseName] = useState("");
  const handleCourseNameChange = (e) => {
    setCourseName(e.target.value);
  };
  const [courseStartDate, setCourseStartDate] = useState("");
  const handlecourseStartDateChange = (e) => {
    setCourseStartDate(e.target.value);
  };
  const [courseEndDate, setCourseEndDate] = useState("");
  const handlecourseEndDateChange = (e) => {
    setCourseEndDate(e.target.value);
  };
  const [courseStudyWeeks, setCourseStudyWeeks] = useState("");
  const handleCourseStudyWeeksChange = (e) => {
    setCourseStudyWeeks(e.target.value);
  };
  const [interestedField, setInterestedField] = useState("");
  const handleInterestedFieldChange = (e) => {
    setInterestedField(e.target.value);
  };
  const [studyTime, setStudyTime] = useState("");
  const StudyTimeEnum = ["Full-Time", "Part-Time-Morning", "Part-Time-Evening"];
  const handleStudyTimeChange = (e) => {
    setStudyTime(e.target.value);
  };

  const [careerPlans, setCareerPlans] = useState("");
  const handleCareerPlansChange = (e) => {
    setCareerPlans(e.target.value);
  };
  const [medicalDisability, setMedicalDisability] = useState({
    answer: "",
    explanation: "",
  });
  const MedicalDisabilityEnum = ["Yes", "No"];
  const handleMedicalDisabilityChange = (e) => {
    const { name, value } = e.target;
    setMedicalDisability((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [applicantAgent, setApplicantAgent] = useState("");
  const ApplicantAgentEnum = ["Yes", "No"];
  const handleApplicantAgentChange = (e) => {
    const { value } = e.target;
    setApplicantAgent(value);
  };

  const [applicantEmail, setApplicantEmail] = useState("");
  const handleApplicantEmailChange = (e) => {
    setApplicantEmail(e.target.value);
  };
  const [howDidYouFindUs, setHowDidYouFindUs] = useState("");
  const handleHowDidYouFoundUsChange = (e) => {
    setHowDidYouFindUs(e.target.value);
  };
  const [interestedHobbies, setInterestedHobbies] = useState("");
  const handleInterestedHobbiesChange = (e) => {
    setInterestedHobbies(e.target.value);
  };
  const [companyAccommodation, setCompanyAccommodation] = useState({
    answer: "",
    AccommodationDetails: "",
  });
  const CompanyAccommodationEnum = ["Yes", "No"];
  const handleCompanyAccommodationChange = (e) => {
    const { value } = e.target;
    setCompanyAccommodation((prevState) => ({
      ...prevState,
      answer: value,
      AccommodationDetails:
        value === "Yes" ? "" : prevState.AccommodationDetails, // Clear details if answer is "No"
    }));
  };
  const [accommodationStartDate, setAccommodationStartDate] = useState("");
  const handleAccommodationStartDateChange = (e) => {
    setAccommodationStartDate(e.target.value);
  };
  const [accommodationEndDate, setAccommodationEndDate] = useState("");
  const handleAccommodationEndDateChange = (e) => {
    setAccommodationEndDate(e.target.value);
  };
  const [accommodationStudyWeeks, setAccommodationStudyWeeks] = useState("");
  const handleAccommodationStudyWeeksChange = (e) => {
    setAccommodationStudyWeeks(e.target.value);
  };
  const [accommodationOptions, setAccommodationOptions] = useState("");
  const AccommodationOptionsEnum = [
    "Homestay",
    "Homestay on farm",
    "Hotel/Motel/Apartment",
  ];
  const handleAccomodationOptionsChange = (event) => {
    setAccommodationOptions(event.target.value);
  };
  const [smoke, setSmoke] = useState("");
  const SmokeEnum = ["Yes", "No"];
  const handleSmokeChange = (event) => {
    setSmoke(event.target.value);
  };
  const [specificDiet, setSpecificDiet] = useState({ answer: "", diet: "" });
  const SpecificDietEnum = ["Yes", "No"];
  const handleSpecificDietChange = (event) => {
    const { name, value } = event.target;
    setSpecificDiet((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const [petsIssue, setPetsIssue] = useState({ answer: "", pets: "" });
  const PetsIssueEnum = ["Yes", "No"];

  const handlePetsIssueChange = (event) => {
    const { name, value } = event.target;
    setPetsIssue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [foodsCantEat, setFoodsCantEat] = useState({ answer: "", foods: "" });
  const FoodsCantEatEnum = ["Yes", "No"];
  const handleFoodsCantEatChange = (event) => {
    const { name, value } = event.target;
    setFoodsCantEat((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [allergicFoodsPets, setAllergicFoodsPets] = useState({
    answer: "",
    allergies: "",
  });
  const AllergicFoodsPetsEnum = ["Yes", "No"];

  const handleAllergiesChange = (event) => {
    const { name, value } = event.target;
    setAllergicFoodsPets((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [sufferingMedicalCondition, setSufferingMedicalCondition] = useState({
    answer: "",
    condition: "",
  });
  const SufferingMedicalConditionEnum = ["Yes", "No"];

  const handleMedicalConditionChange = (event) => {
    const { name, value } = event.target;
    setSufferingMedicalCondition((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [mindInternationalFamily, setMindInternationalFamily] = useState({
    answer: "",
    familyType: "",
  });
  const MindInternationalFamilyEnum = ["Yes", "No"];

  const handleInternationalChange = (event) => {
    const { name, value } = event.target;
    setMindInternationalFamily((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const [accommodationQuestions, setAccommodationQuestions] = useState({
    answer: "",
    questions: "",
  });
  const AccommmodationEnum = ["Yes", "No"];
  const handleAccommodationQuestionChange = (event) => {
    const { name, value } = event.target;
    setAccommodationQuestions((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/adduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image,
          firstName,
          familyName,
          personalCnic,
          personalEmail,
          personalMobile,
          personalPhone,
          personalDateOfBirth,
          gender,
          citizenshipCountry,
          presentOccupation,
          visa,
          passportNumber,
          passportExpiry,
          homeAddress,
          chinaAddress,
          firstLanguage,
          otherLanguages,
          englishLevel,
          qualificationLevel,
          passedEnglishTests,
          schoolInfo,
          collegeInfo,
          campusSite,
          courseName,
          courseStartDate,
          courseEndDate,
          courseStudyWeeks,
          interestedField,
          studyTime,
          careerPlans,
          medicalDisability,
          applicantAgent,
          applicantEmail,
          howDidYouFindUs,
          interestedHobbies,
          companyAccommodation,
          accommodationStartDate,
          accommodationEndDate,
          accommodationStudyWeeks,
          accommodationOptions,
          smoke,
          specificDiet,
          petsIssue,
          foodsCantEat,
          allergicFoodsPets,
          sufferingMedicalCondition,
          mindInternationalFamily,
          accommodationQuestions,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Clear input fields after successful submission
      setImage("");
      setFirstName("");
      setFamilyName("");
      setPersonalCnic("");
      setPersonalEmail("");
      setPersonalMobile("");
      setPersonalPhone("");
      setPersonalDateOfBirth("");
      setGender("");
      setCitizenshipCountry("");
      setPresentOccupation("");
      setVisa("");
      setPassportNumber("");
      setPassportExpiry("");
      setHomeAddress({ address: "", phone: "", mobile: "", email: "" });
      setChinaAddress({ address: "", phone: "", mobile: "", email: "" });
      setFirstLanguage("");
      setOtherLanguages("");
      setEnglishLevel("");
      setQualificationLevel("");
      setPassedEnglishTests([]);
      setSchoolInfo("");
      setCollegeInfo("");
      setCampusSite("");
      setCourseName("");
      setCourseStartDate("");
      setCourseEndDate("");
      setCourseStudyWeeks("");
      setInterestedField("");
      setStudyTime("");
      setCareerPlans("");
      setMedicalDisability({ answer: "", explanation: "" });
      setApplicantAgent("");
      setApplicantEmail("");
      setHowDidYouFindUs("");
      setInterestedHobbies("");
      setCompanyAccommodation("");
      setAccommodationStartDate("");
      setAccommodationEndDate("");
      setAccommodationStudyWeeks("");
      setAccommodationOptions("");
      setSmoke("");
      setSpecificDiet({ answer: "", diet: "" });
      setPetsIssue({ answer: "", pets: "" });
      setFoodsCantEat({ answer: "", foods: "" });
      setAllergicFoodsPets({ answer: "", allergies: "" });
      setSufferingMedicalCondition({ answer: "", condition: "" });
      setMindInternationalFamily({ answer: "", familyType: "" });
      setAccommodationQuestions({ answer: "", questions: "" });

      const responseData = await response.json();
      console.log(responseData);
      // You can add further handling after successful submission, like showing a success message or redirecting the user.
    } catch (error) {
      console.error("Error:", error);
      // Handle error, like showing an error message to the user.
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
                  <div className="left col-md-12 col-lg-9">
                    <div className="row">
                      <div class={`${"group gap-2 col-lg-6"} ${"name"}`}>
                        <input
                          type="text"
                          name="firstName"
                          className="w-100 f_input"
                          required="required"
                          value={firstName} // Set the value of the input field to firstName state
                          onChange={handleFirstNameChange} // Apply handleChange function here
                        />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label className="f_label">
                          First Name <span>*</span>
                        </label>
                      </div>
                      <div class={`${"group gap-2 col-lg-6"} ${"name"}`}>
                        <input
                          type="text"
                          name="familyName"
                          className="w-100 f_input"
                          required="required"
                          value={familyName} // Set the value of the input field to firstName state
                          onChange={handleFamilyNameChange} // Apply handleChange function here
                        />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label className="f_label">
                          Family Name <span>*</span>
                        </label>
                      </div>

                      <div class={`${"group gap-2 col-lg-6"} ${"name"}`}>
                        <input
                          type="text"
                          name="
    personalEmail"
                          className="w-100 f_input"
                          required="required"
                          value={personalEmail} // Set the value of the input field to firstName state
                          onChange={handlePersonalEmailChange} // Apply handleChange function here
                        />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label className="f_label">
                          Email<span>*</span>
                        </label>
                      </div>
                      <div class={`${"group gap-2 col-lg-6"} ${"name"}`}>
                        <input
                          type="text"
                          name="
    personalPhone"
                          className="w-100 f_input"
                          required="required"
                          value={personalPhone} // Set the value of the input field to firstName state
                          onChange={handlePersonalPhoneChange} // Apply handleChange function here
                        />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label className="f_label">
                          Phone Number <span>*</span>
                        </label>
                      </div>
                      <div class={`${"group gap-2 col-lg-6"} ${"name"}`}>
                        <input
                          type="text"
                          name="personalMobile"
                          className="w-100 f_input"
                          required="required"
                          value={personalMobile} // Set the value of the input field to firstName state
                          onChange={handlePersonalMobileChange} // Apply handleChange function here
                        />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label className="f_label">
                          Personal Mobile<span>*</span>
                        </label>
                      </div>
                      <div class={`${"group gap-2 col-lg-6"} ${"name"}`}>
                        <input
                          type="text"
                          name="personalCnic"
                          className="w-100 f_input"
                          required="required"
                          value={personalCnic} // Set the value of the input field to firstName state
                          onChange={handleCnicChange} // Apply handleChange function here
                        />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label className="f_label">
                          Personal Cnic <span>*</span>
                        </label>
                      </div>
                      <div class={`${"group gap-2 col-lg-12"} ${"dob"}`}>
                        <input
                          type="date"
                          name="personalDateOfBirth"
                          className="w-100 f_input"
                          value={personalDateOfBirth}
                          onChange={handlePersonalDateOfBirthChange}
                        />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label className="f_label">
                          Date of Birth<span>*</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="right col-lg-3 col-md-12">
                    <div className="imggroup gap-2 col-lg-4">
                      <div className="image-box overflow-hidden d-none d-lg-block">
                        {/* Placeholder for uploaded image */}
                        {image && <img src={image} alt="Uploaded" />}
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange} // Apply handleChange function here
                        className="w-100 mb-2 f_input"
                      />
                    </div>
                  </div>

                  {/* <div class={`${"group gap-2 col-lg-6"} ${"address"}`}>
                    <input
                      type="text"
                      name="address"
                      className="w-100 f_input"
                      required="required"
                    />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label className="f_label">
                      Address <span>*</span>
                    </label>
                  </div> */}
                  <div class={`${"group gap-2 col-lg-6"} ${"gender"}`}>
                    <select
                      name="gender"
                      className="w-100"
                      id="gender"
                      value={gender}
                      onChange={handleGenderChange}
                    >
                      <option value="" hidden>
                        Select Your Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div class={`${"group gap-2 col-lg-6"} ${"name"}`}>
                    <input
                      type="text"
                      name="presentOccupation"
                      className="w-100 f_input"
                      required="required"
                      value={presentOccupation} // Set the value of the input field to firstName state
                      onChange={handlePresentOccupationChange} // Apply handleChange function here
                    />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label className="f_label">
                      Present Occupation<span>*</span>
                    </label>
                  </div>
                  <div class={`${"group gap-2 col-lg-6"} ${"name"}`}>
                    <input
                      type="text"
                      name="
    passportNumber"
                      className="w-100 f_input"
                      required="required"
                      value={passportNumber} // Set the value of the input field to firstName state
                      onChange={handlePassportNumberChange} // Apply handleChange function here
                    />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label className="f_label">
                      Passport Number<span>*</span>
                    </label>
                  </div>
                  <div class={`${"group gap-2 col-lg-2"} ${"dob"}`}>
                    <input
                      type="date"
                      name="passportExpiry"
                      className="w-100 f_input"
                      value={passportExpiry} // Set the value of the input field to personalDateOfBirth state
                      onChange={handlePassportExpiryChange} // Apply handleChange function here
                    />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label className="f_label">
                      Passport Expiry<span>*</span>
                    </label>
                  </div>
                  <div class={`${"group gap-2 col-lg-6"} ${"name"}`}>
                    <input
                      type="text"
                      name="citizenshipCountry"
                      className="w-100 f_input"
                      required="required"
                      value={citizenshipCountry} // Set the value of the input field to firstName state
                      onChange={handleCitizenshipCountryChange} // Apply handleChange function here
                    />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label className="f_label">
                      Citizenship / country <span>*</span>
                    </label>
                  </div>

                  <div class={`${"group mb-3 col-lg-6"} ${"visatype"}`}>
                    <select
                      name="visatype"
                      className="w-100"
                      id="visatype"
                      value={visa}
                      onChange={handleVisaChange}
                    >
                      <option value="" hidden>
                        Visa Type
                      </option>
                      {VisaEnum.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div class={`${"group gap-2 col-lg-6"} ${"visatype"}`}>
                    <div className="form-control pikora">
                      <h1 className="homeaddreheading">Home Address</h1>
                      <div className="row">
                        <div className="group mb-3 col-lg-6">
                          <input
                            type="text"
                            name="address"
                            value={homeAddress.address}
                            onChange={handleHomeAddressChange}
                            className="w-100 f_input"
                            required
                          />
                          <span className="highlight"></span>
                          <span className="bar"></span>
                          <label className="f_label">
                            Address <span>*</span>
                          </label>
                        </div>

                        <div className="group mb-3 col-lg-6">
                          <input
                            type="tel"
                            name="phone"
                            value={homeAddress.phone}
                            onChange={handleHomeAddressChange}
                            className="w-100 f_input"
                            required
                          />
                          <span className="highlight"></span>
                          <span className="bar"></span>
                          <label className="f_label">
                            Phone <span>*</span>
                          </label>
                        </div>

                        <div className="group mb-3 col-lg-6">
                          <input
                            type="tel"
                            name="mobile"
                            value={homeAddress.mobile}
                            onChange={handleHomeAddressChange}
                            className="w-100 f_input"
                            required
                          />
                          <span className="highlight"></span>
                          <span className="bar"></span>
                          <label className="f_label">
                            Mobile <span>*</span>
                          </label>
                        </div>

                        <div className="group mb-3 col-lg-6">
                          <input
                            type="email"
                            name="email"
                            value={homeAddress.email}
                            onChange={handleHomeAddressChange}
                            className="w-100 f_input"
                            required
                          />
                          <span className="highlight"></span>
                          <span className="bar"></span>
                          <label className="f_label">
                            Email <span>*</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class={`${"group gap-2 col-lg-6"} ${"visatype"}`}>
                    <div className="form-control pikora">
                      <h1 className="homeaddreheading">China Address</h1>
                      <div className="row">
                        <div class={`${"group gap-2 col-lg-6"} ${"address"}`}>
                          <input
                            type="text"
                            name="address"
                            value={chinaAddress.address}
                            onChange={handleChinaAddressChange}
                            className="w-100 f_input"
                            required
                          />
                          <span class="highlight"></span>
                          <span class="bar"></span>
                          <label className="f_label">
                            Address <span>*</span>
                          </label>
                        </div>
                        <div class={`${"group gap-2 col-lg-6"} ${"number"}`}>
                          <input
                            type="text"
                            name="mobile"
                            value={chinaAddress.mobile}
                            onChange={handleChinaAddressChange}
                            className="w-100 f_input"
                            required
                          />
                          <span class="highlight"></span>
                          <span class="bar"></span>
                          <label className="f_label">
                            Mobile Number <span>*</span>
                          </label>
                        </div>
                        <div class={`${"group gap-2 col-lg-6"} ${"email"}`}>
                          <input
                            type="text"
                            name="email"
                            value={chinaAddress.email}
                            onChange={handleChinaAddressChange}
                            className="w-100 f_input"
                            required
                          />
                          <span class="highlight"></span>
                          <span class="bar"></span>
                          <label className="f_label">
                            Email <span>*</span>
                          </label>
                        </div>
                        <div class={`${"group gap-2 col-lg-6"} ${"phone"}`}>
                          <input
                            type="text"
                            name="phone"
                            value={chinaAddress.phone}
                            onChange={handleChinaAddressChange}
                            className="w-100 f_input"
                            required
                          />
                          <span class="highlight"></span>
                          <span class="bar"></span>
                          <label className="f_label">
                            Phone Number <span>*</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* LANGUAGES  */}
                  <div className=" mt-5 heading fw-bold p-2 fs-5 opacity-75">
                    LANGUAGE
                  </div>
                  <div className="form-control p-4">
                    <div className="row ">
                      <div class={`${"group  gap-2 col-lg-6"} ${"language"}`}>
                        <input
                          type="text"
                          className="w-100 f_input"
                          value={firstLanguage}
                          onChange={handleFirstLanguageChange}
                          required="required"
                        />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label className="f_label">
                          First Language <span>*</span>
                        </label>
                      </div>
                      <div class={`${"group gap-2 col-lg-6"} ${"olanguage"}`}>
                        <input
                          type="text"
                          className="w-100 f_input"
                          value={otherLanguages}
                          onChange={handleOtherLanguageChange}
                          required="required"
                        />
                        <span class="highlight "></span>
                        <span className=" bar"></span>
                        <label className="f_label">Other Language</label>
                      </div>
                      <div class={`${"group mb-2 col-lg-6"} ${"englislvl"}`}>
                        <select
                          id="english-level"
                          className="w-100"
                          name="english-level"
                          value={englishLevel}
                          onChange={handlEnglishLevelChange}
                        >
                          <option hidden>What is your english level ?</option>
                          <option value="Beginner">Beginner</option>
                          <option value="Elementary">Elementary</option>
                          <option value="IELTS 4.5">IELTS 4.5</option>
                          <option value="IELTS 5.5">IELTS 5.5</option>
                          <option value="IELTS 6.0">IELTS 6.0</option>
                          <option value="IELTS 6.5">IELTS 6.5</option>
                        </select>
                      </div>
                      <div
                        class={`${"group mb-2 col-lg-6"} ${"checkboxes_form_field"}`}
                      >
                        <label>Have you sat any English Test</label>
                        <div className="checkboxes_form">
                          {EnglishTestsEnum.map((test, index) => (
                            <div
                              key={index}
                              className="u_inner_data_container u_checkbox_inner_container"
                            >
                              <label htmlFor={test}>{test}</label>
                              <input
                                name={test}
                                type="checkbox"
                                className="u_f_v u_i_f"
                                value={test}
                                checked={passedEnglishTests.includes(test)}
                                onChange={handlePassedEnglishTestsChange}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* STUDY  */}
                  <div className=" mt-5 heading fw-bold p-2 fs-5 opacity-75">
                    STUDY
                  </div>
                  <div className="form-control p-4">
                    <div className="row ">
                      <div class={`${"group mb-2 col-lg-6"} ${"studylevl"}`}>
                        <input
                          type="text"
                          className="w-100 f_input"
                          value={qualificationLevel}
                          onChange={handleQualificationLevelChange}
                          required="required"
                        />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label className="f_label">
                          What is your highest qualification level ?
                        </label>
                      </div>
                      <div class={`${"group gap-2 col-lg-6"} ${"schoolinfo"}`}>
                        <input
                          type="text"
                          className="w-100 f_input"
                          value={schoolInfo}
                          onChange={handleSchoolInfoChange}
                          required="required"
                        />
                        <span class="highlight "></span>
                        <span className=" bar"></span>
                        <label className="f_label">School Information</label>
                      </div>
                      <div class={`${"group gap-2 col-lg-6"} ${"schoolinfo"}`}>
                        <input
                          type="text"
                          className="w-100 f_input"
                          value={collegeInfo}
                          onChange={handleCollegeInfoChange}
                          required="required"
                        />
                        <span class="highlight "></span>
                        <span className=" bar"></span>
                        <label className="f_label">College Information</label>
                      </div>
                    </div>
                  </div>
                  {/* COURSE  */}
                  <div className=" mt-5 heading fw-bold p-2 fs-5 opacity-75">
                    COURSE:
                  </div>
                  <div className="form-control p-4">
                    <div className="row ">
                      <div
                        class={`${"group mb-2 col-lg-6"} ${"campusSel mb-3"}`}
                      >
                        <input
                          type="text"
                          className="w-100 f_input"
                          value={campusSite}
                          onChange={handleCampusSiteChange}
                          required="required"
                        />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label className="f_label">Campus site</label>
                      </div>
                      <div
                        class={`${"group gap-2 col-lg-6"} ${"courstartdate"}`}
                      >
                        <input
                          type="date"
                          name="
                          courseStartDate"
                          className="w-100 f_input"
                          value={courseStartDate} // Set the value of the input field to personalDateOfBirth state
                          onChange={handlecourseStartDateChange} // Apply handleChange function here
                        />
                        <span class="highlight "></span>
                        <span className=" bar"></span>
                        <label className="f_label">Course Start Date</label>
                      </div>
                      <div
                        class={`${"group gap-2 col-lg-6"} ${"coursenddate"}`}
                      >
                        <input
                          type="date"
                          name="
                          courseStartDate"
                          className="w-100 f_input"
                          value={courseStartDate} // Set the value of the input field to personalDateOfBirth state
                          onChange={handlecourseEndDateChange} // Apply handleChange function here
                        />
                        <span class="highlight "></span>
                        <span className=" bar"></span>
                        <label className="f_label">Course End Date</label>
                      </div>
                      <div class={`${"group gap-2 col-lg-6"} ${"studyweeks"}`}>
                        <input
                          type="input"
                          required="required"
                          className="w-100 f_input"
                          value={courseStudyWeeks} // Set the value of the input field to personalDateOfBirth state
                          onChange={handleCourseStudyWeeksChange} // Apply handleChange function here
                        />
                        <span class="highlight "></span>
                        <span className=" bar"></span>
                        <label className="f_label">Course Study Weeks</label>
                      </div>
                      <div
                        class={`${"group gap-2 col-lg-6"} ${"Applicant_Email"}`}
                      >
                        <input
                          type="text"
                          className="w-100 f_input"
                          value={courseName}
                          onChange={handleCourseNameChange}
                          required="required"
                        />
                        <span class="highlight "></span>
                        <span className=" bar"></span>
                        <label className="f_label">Course Name</label>
                      </div>
                      <div
                        class={`${"group gap-2 col-lg-6"} ${"intstdfields"}`}
                      >
                        <input
                          type="input"
                          required="required"
                          className="w-100 f_input"
                          value={interestedField}
                          onChange={handleInterestedFieldChange}
                        />
                        <span class="highlight "></span>
                        <span className=" bar"></span>
                        <label className="f_label">Intrested Fields</label>
                      </div>
                      <div class={`${"group mb-2 col-lg-6"} ${"studytime"}`}>
                        <select
                          id="studytime"
                          className="w-100"
                          name="studytime"
                          value={studyTime}
                          onChange={handleStudyTimeChange}
                        >
                          <option hidden>Study Time</option>
                          {StudyTimeEnum.map((time, index) => (
                            <option key={index} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div class={`${"group gap-2 col-lg-6"} ${"intrests"}`}>
                        <input
                          type="input"
                          required="required"
                          className="w-100 f_input"
                          value={careerPlans}
                          onChange={handleCareerPlansChange}
                        />
                        <span class="highlight "></span>
                        <span className=" bar"></span>
                        <label className="f_label">
                          What you will gona do after course ?
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* OTHER QUESTIONS  */}
                  <div className=" mt-5 heading fw-bold p-2 fs-5 opacity-75">
                    OTHER QUEATIONS ABOUT YOURSELF
                  </div>
                  <div className="form-control p-4">
                    <div className="row ">
                      <div className={`${"group mb-2 col-lg-6"} ${"medical"}`}>
                        <select
                          id="medical"
                          className="w-100"
                          name="answer"
                          value={medicalDisability.answer}
                          onChange={handleMedicalDisabilityChange}
                        >
                          <option hidden>
                            Do you have any medical disability?
                          </option>
                          {MedicalDisabilityEnum.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        {medicalDisability.answer === "Yes" && (
                          <div
                            className={`${"group gap-2 col-lg-6"} ${"Applicant_Email"}`}
                          >
                            <input
                              type="text"
                              name="explanation"
                              className="w-100 f_input"
                              value={medicalDisability.explanation}
                              onChange={handleMedicalDisabilityChange}
                              required="required"
                            />
                            <span className="highlight "></span>
                            <span className="bar"></span>
                            <label className="f_label">Details :</label>
                          </div>
                        )}
                      </div>
                      <div
                        className={`${"group mb-2 col-lg-6"} ${"applyingMethod"}`}
                      >
                        <select
                          id="applyingMethod"
                          className="w-100"
                          name="applicantAgent"
                          value={applicantAgent}
                          onChange={handleApplicantAgentChange}
                        >
                          <option hidden>
                            Are you applying through an agent?
                          </option>
                          {ApplicantAgentEnum.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div
                        class={`${"group gap-2 col-lg-6"} ${"Applicant_Email"}`}
                      >
                        <input
                          type="text"
                          className="w-100 f_input"
                          required="required"
                          value={applicantEmail}
                          onChange={handleApplicantEmailChange}
                        />
                        <span class="highlight "></span>
                        <span className=" bar"></span>
                        <label className="f_label">Applicant Email</label>
                      </div>
                      <div
                        class={`${"group gap-2 col-lg-6"} ${"Applicant_Email"}`}
                      >
                        <input
                          type="text"
                          className="w-100 f_input"
                          required="required"
                          value={howDidYouFindUs}
                          onChange={handleHowDidYouFoundUsChange}
                        />
                        <span class="highlight "></span>
                        <span className=" bar"></span>
                        <label className="f_label">
                          How did you found us ?
                        </label>
                      </div>
                      <div
                        class={`${"group gap-2 col-lg-6"} ${"Applicant_Email"}`}
                      >
                        <input
                          type="text"
                          className="w-100 f_input"
                          required="required"
                          value={interestedHobbies}
                          onChange={handleInterestedHobbiesChange}
                        />
                        <span class="highlight "></span>
                        <span className=" bar"></span>
                        <label className="f_label">
                          Your interest and hobbies
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* ACOMMODATION  */}
                  <div className=" mt-5 heading fw-bold p-2 fs-5 opacity-75">
                    COMPANY ACCOMODATION
                  </div>
                  <div className="form-control p-4">
                    <div className="row ">
                      <div
                        className={`${"group mb-3 col-lg-6"} ${"accommodation"}`}
                      >
                        <select
                          id="accommodation"
                          className="w-100"
                          name="accommodation"
                          value={companyAccommodation.answer}
                          onChange={handleCompanyAccommodationChange}
                        >
                          <option hidden>
                            Do you want the company to provide accommodation?
                          </option>
                          {CompanyAccommodationEnum.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        {companyAccommodation.answer === "Yes" && (
                          <div
                            className={`${"group gap-2 col-lg-6"} ${"Applicant_Email"}`}
                          >
                            <input
                              type="text"
                              className="w-100 f_input"
                              required="required"
                              placeholder="Details about accommodation"
                              value={companyAccommodation.AccommodationDetails}
                              onChange={(e) =>
                                setCompanyAccommodation((prevState) => ({
                                  ...prevState,
                                  AccommodationDetails: e.target.value,
                                }))
                              }
                            />
                          </div>
                        )}
                      </div>
                      <div
                        class={`${"group gap-2 col-lg-6"} ${"Accommodationsate"}`}
                      >
                        <input
                          type="date"
                          className="w-100 f_input"
                          value={accommodationStartDate}
                          onChange={handleAccommodationStartDateChange}
                        />
                        <span class="highlight "></span>
                        <span className=" bar"></span>
                        <label className="f_label">
                          Accommodation Start Date
                        </label>
                      </div>
                      <div
                        class={`${"group gap-2 col-lg-6"} ${"Accommodationsate"}`}
                      >
                        <input
                          type="date"
                          className="w-100 f_input"
                          value={accommodationEndDate}
                          onChange={handleAccommodationEndDateChange}
                        />
                        <span class="highlight "></span>
                        <span className=" bar"></span>
                        <label className="f_label">
                          Accommodation End Date
                        </label>
                      </div>
                      <div
                        class={`${"group gap-2 col-lg-6"} ${"Accommodationstudy"}`}
                      >
                        <input
                          type="input"
                          required="required"
                          className="w-100 f_input"
                          value={accommodationStudyWeeks}
                          onChange={handleAccommodationStudyWeeksChange}
                        />
                        <span class="highlight "></span>
                        <span className=" bar"></span>
                        <label className="f_label">
                          Accommodation Study Weeks
                        </label>
                      </div>
                      <div
                        className={`${"group mb-2 col-lg-6"} ${"campusSel mb-3"}`}
                      >
                        <select
                          id="campusSel"
                          className="w-100"
                          name="campusSel"
                          value={accommodationOptions}
                          onChange={handleAccomodationOptionsChange}
                        >
                          <option hidden>Accommodation option</option>
                          {AccommodationOptionsEnum.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div
                        className={`${"group mb-2 col-lg-6"} ${"accommodation"}`}
                      >
                        <select
                          id="accommodation"
                          className="w-100"
                          name="answer"
                          value={specificDiet.answer}
                          onChange={handleSpecificDietChange}
                        >
                          <option hidden>
                            Do you have to follow any specific diet?
                          </option>
                          {SpecificDietEnum.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        {specificDiet.answer === "Yes" && (
                          <div
                            className={`${"group gap-2 col-lg-6"} ${"Applicant_Email"}`}
                          >
                            <input
                              type="text"
                              className="w-100 f_input"
                              required="required"
                              placeholder="Details about diet"
                              name="diet"
                              value={specificDiet.diet}
                              onChange={handleSpecificDietChange}
                            />
                          </div>
                        )}
                      </div>
                      <div
                        className={`${"group mb-2 col-lg-6"} ${"accommodation"}`}
                      >
                        <select
                          id="accommodation"
                          className="w-100"
                          name="answer"
                          value={petsIssue.answer}
                          onChange={handlePetsIssueChange}
                        >
                          <option hidden>
                            Do you mind living in a house that has pets?
                          </option>
                          {PetsIssueEnum.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        {petsIssue.answer === "Yes" && (
                          <div
                            className={`${"group gap-2 col-lg-6"} ${"Applicant_Email"}`}
                          >
                            <input
                              type="text"
                              className="w-100 f_input"
                              required="required"
                              placeholder="Details about those pets"
                              name="pets"
                              value={petsIssue.pets}
                              onChange={handlePetsIssueChange}
                            />
                          </div>
                        )}
                      </div>
                      <div
                        className={`${"group mb-2 col-lg-6"} ${"accommodation"}`}
                      >
                        <select
                          id="accommodation"
                          className="w-100"
                          name="answer"
                          value={foodsCantEat.answer}
                          onChange={handleFoodsCantEatChange}
                        >
                          <option hidden>
                            Are there any foods you can't eat?
                          </option>
                          {FoodsCantEatEnum.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        {foodsCantEat.answer === "Yes" && (
                          <div
                            className={`${"group gap-2 col-lg-6"} ${"Applicant_Email"}`}
                          >
                            <input
                              type="text"
                              className="w-100 f_input"
                              required="required"
                              placeholder="Details about foods"
                              name="foods"
                              value={foodsCantEat.foods}
                              onChange={handleFoodsCantEatChange}
                            />
                          </div>
                        )}
                      </div>

                      <div
                        className={`${"group mb-2 col-lg-6"} ${"accommodation"}`}
                      >
                        <select
                          id="accommodation"
                          className="w-100"
                          name="answer"
                          value={allergicFoodsPets.answer}
                          onChange={handleAllergiesChange}
                        >
                          <option hidden>
                            Are you allergic to any foods or animals?
                          </option>
                          {AllergicFoodsPetsEnum.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        {allergicFoodsPets.answer === "Yes" && (
                          <div
                            className={`${"group gap-2 col-lg-6"} ${"Applicant_Email"}`}
                          >
                            <input
                              type="text"
                              className="w-100 f_input"
                              required="required"
                              placeholder="Details about allergies"
                              name="allergies"
                              value={allergicFoodsPets.allergies}
                              onChange={handleAllergiesChange}
                            />
                          </div>
                        )}
                      </div>

                      <div className="group mb-2 col-lg-6 accommodation">
                        <select
                          id="accommodation"
                          className="w-100"
                          name="answer"
                          value={sufferingMedicalCondition.answer}
                          onChange={handleMedicalConditionChange}
                        >
                          <option hidden>
                            Do you suffer from any medical condition?
                          </option>
                          {SufferingMedicalConditionEnum.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        {sufferingMedicalCondition.answer === "Yes" && (
                          <div className="group gap-2 col-lg-6 Applicant_Email">
                            <input
                              type="text"
                              className="w-100 f_input"
                              required="required"
                              placeholder="About Medical Condition"
                              name="condition"
                              value={sufferingMedicalCondition.condition}
                              onChange={handleMedicalConditionChange}
                            />
                          </div>
                        )}
                      </div>
                      <div className="group mb-2 col-lg-6 accommodation">
                        <select
                          id="accommodation"
                          className="w-100"
                          name="answer"
                          value={mindInternationalFamily.answer}
                          onChange={handleInternationalChange}
                        >
                          <option hidden>
                            Do you mind if any other international client live
                            with you?
                          </option>
                          {MindInternationalFamilyEnum.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        {mindInternationalFamily.answer === "Yes" && (
                          <div className="group gap-2 col-lg-6 Applicant_Email">
                            <input
                              type="text"
                              className="w-100 f_input"
                              required="required"
                              placeholder="Details about client"
                              name="familyType"
                              value={mindInternationalFamily.familyType}
                              onChange={handleInternationalChange}
                            />
                          </div>
                        )}
                      </div>

                      <div className={`${"group mb-2 col-lg-6"} ${"usmoke"}`}>
                        <select
                          id="usmoke"
                          className="w-100"
                          name="usmoke"
                          value={smoke}
                          onChange={handleSmokeChange}
                        >
                          <option hidden>Do you smoke?</option>
                          {SmokeEnum.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="group mb-2 col-lg-6 accommodation">
                        <select
                          id="accommodation"
                          className="w-100"
                          name="answer"
                          value={accommodationQuestions.answer}
                          onChange={handleAccommodationQuestionChange}
                        >
                          <option hidden>
                            Do you have any question about accommodation?
                          </option>
                          {AccommmodationEnum.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        {accommodationQuestions.answer === "Yes" && (
                          <div className="group gap-2 col-lg-6 Applicant_Email">
                            <input
                              type="text"
                              className="w-100 f_input"
                              required="required"
                              placeholder="Details about questions"
                              name="questions"
                              value={accommodationQuestions.questions}
                              onChange={handleAccommodationQuestionChange}
                            />
                          </div>
                        )}
                      </div>
                    </div>
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
