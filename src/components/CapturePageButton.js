// PDFButton.js
import React from 'react';
import { Page, Text, View, Document, PDFDownloadLink, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  table: { 
    display: "table", 
    width: "auto", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderRightWidth: 0, 
    borderBottomWidth: 0 
  }, 
  tableRow: { 
    margin: "auto", 
    flexDirection: "row" 
  }, 
  tableCol: { 
    width: "20%", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  }, 
  tableCell: { 
    margin: "auto", 
    marginTop: 5, 
    fontSize: 10 
  } 
});

const MyDocument = ({ PTMAC, Perr }) => (
  <Document>
    <Page>
      <View>
        <Text>Mi primer PDF en React</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            {PTMAC.map((value, index) => (
              <View style={styles.tableCol} key={index}>
                <Text style={styles.tableCell}>{value}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            {Perr.map((value, index) => (
              <View style={styles.tableCol} key={index}>
                <Text style={styles.tableCell}>{value}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

const PDFButton = ({ PTMAC, Perr }) => (
  <PDFDownloadLink document={<MyDocument PTMAC={PTMAC} Perr={Perr} />} fileName="miarchivo.pdf">
    {({ blob, url, loading, error }) => (loading ? 'Cargando documento...' : 'Descargar PDF')}
  </PDFDownloadLink>
);

export default PDFButton;
