// UserDocument.js
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const UserDocument = ({ userData }) => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.first}>Name: {userData.name}</Text>
          <Text>Email: {userData.email}</Text>
          <Text>Note: {userData.note}</Text>
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  section: {
    display: 'flex',
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default UserDocument;