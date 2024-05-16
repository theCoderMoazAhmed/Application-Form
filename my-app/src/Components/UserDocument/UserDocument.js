import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const UserDocument = ({ userData }) => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.field}>ID: {userData.id}</Text>
          <Text style={styles.field}>Application Date: {userData.applicationDate}</Text>
          <Text style={styles.field}>First Name: {userData.firstName}</Text>
          <Text style={styles.field}>Family Name: {userData.familyName}</Text>
          <Text style={styles.field}>Personal CNIC: {userData.personalCnic}</Text>
          <Text style={styles.field}>Personal Email: {userData.personalEmail}</Text>
          <Text style={styles.field}>Personal Mobile: {userData.personalMobile}</Text>
          <Text style={styles.field}>Personal Phone: {userData.personalPhone}</Text>
          <Text style={styles.field}>Personal Date of Birth: {userData.personalDateOfBirth}</Text>
          <Text style={styles.field}>Gender: {userData.gender}</Text>
          <Text style={styles.field}>Citizenship Country: {userData.citizenshipCountry}</Text>
          <Text style={styles.field}>Present Occupation: {userData.presentOccupation}</Text>
          <Text style={styles.field}>Visa: {userData.visa}</Text>
          <Text style={styles.field}>Passport Number: {userData.passportNumber}</Text>
          <Text style={styles.field}>Passport Expiry: {userData.passportExpiry}</Text>
          <Text style={styles.field}>Home Address: {JSON.stringify(userData.homeAddress)}</Text>
          <Text style={styles.field}>China Address: {JSON.stringify(userData.chinaAddress)}</Text>
          <Text style={styles.field}>First Language: {userData.firstLanguage}</Text>
          <Text style={styles.field}>Other Languages: {userData.otherLanguages}</Text>
          <Text style={styles.field}>English Level: {userData.englishLevel}</Text>
          <Text style={styles.field}>Qualification Level: {userData.qualificationLevel}</Text>
          <Text style={styles.field}>Passed English Tests: {JSON.stringify(userData.passedEnglishTests)}</Text>
          <Text style={styles.field}>School Info: {userData.schoolInfo}</Text>
          <Text style={styles.field}>Medical Disability: {JSON.stringify(userData.medicalDisability)}</Text>
          <Text style={styles.field}>Applicant Agent: {userData.applicantAgent}</Text>
          <Text style={styles.field}>Applicant Email: {userData.applicantEmail}</Text>
          <Text style={styles.field}>How Did You Find Us: {userData.howDidYouFindUs}</Text>
          <Text style={styles.field}>Interested Hobbies: {userData.interestedHobbies}</Text>
          <Text style={styles.field}>Company Accommodation: {JSON.stringify(userData.companyAccommodation)}</Text>
          <Text style={styles.field}>Specific Diet: {JSON.stringify(userData.specificDiet)}</Text>
          <Text style={styles.field}>Pets Issue: {JSON.stringify(userData.petsIssue)}</Text>
          <Text style={styles.field}>Foods Can't Eat: {JSON.stringify(userData.foodsCantEat)}</Text>
          <Text style={styles.field}>Allergic Foods Pets: {JSON.stringify(userData.allergicFoodsPets)}</Text>
          <Text style={styles.field}>Suffering Medical Condition: {JSON.stringify(userData.sufferingMedicalCondition)}</Text>
          <Text style={styles.field}>Mind International Family: {JSON.stringify(userData.mindInternationalFamily)}</Text>
          <Text style={styles.field}>Accommodation Questions: {JSON.stringify(userData.accommodationQuestions)}</Text>
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "white",
  },
  section: {
    display: "flex",
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  field: {
    marginBottom: 5,
  }
});

export default UserDocument;