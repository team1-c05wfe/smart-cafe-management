import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const MyContextDataTable = createContext();

function ContextDataTable({ children }) {
  // const ListTable = [
  //   {
  //     soBan: "TB001", // Mã bàn
  //     monAn: [
  //       {
  //         id: 1,
  //         tenMon: "Cà phê đen",
  //         soLuong: 2,
  //         gia: 15000,
  //         tongTien: 30000,
  //       },
  //       {
  //         id: 2,
  //         tenMon: "Bánh mì",
  //         soLuong: 1,
  //         gia: 10000,
  //         tongTien: 10000,
  //       },
  //     ],
  //   },
  //   {
  //     soBan: "TB002",
  //     monAn: [
  //       {
  //         id: 1,
  //         tenMon: "Trà sữa",
  //         soLuong: 3,
  //         gia: 20000,
  //         tongTien: 60000,
  //       },
  //     ],
  //   },
  //   {
  //     soBan: "TB003",
  //     monAn: [
  //       {
  //         id: 1,
  //         tenMon: "Nước cam",
  //         soLuong: 1,
  //         gia: 12000,
  //         tongTien: 12000,
  //       },
  //       {
  //         id: 2,
  //         tenMon: "Cà phê sữa",
  //         soLuong: 1,
  //         gia: 18000,
  //         tongTien: 18000,
  //       },
  //     ],
  //   },
  //   {
  //     soBan: "TB004",
  //     monAn: [
  //       {
  //         id: 1,
  //         tenMon: "Sinh tố dâu",
  //         soLuong: 2,
  //         gia: 25000,
  //         tongTien: 50000,
  //       },
  //     ],
  //   },
  //   {
  //     soBan: "TB005",
  //     monAn: [
  //       {
  //         id: 1,
  //         tenMon: "Nước ép táo",
  //         soLuong: 2,
  //         gia: 20000,
  //         tongTien: 40000,
  //       },
  //     ],
  //   },
  //   {
  //     soBan: "TB005",
  //     monAn: [
  //       {
  //         id: 1,
  //         tenMon: "Nước ép táo",
  //         soLuong: 2,
  //         gia: 20000,
  //         tongTien: 40000,
  //       },
  //     ],
  //   },
  //   {
  //     soBan: "TB005",
  //     monAn: [
  //       {
  //         id: 1,
  //         tenMon: "Nước ép táo",
  //         soLuong: 2,
  //         gia: 20000,
  //         tongTien: 40000,
  //       },
  //     ],
  //   },
  //   {
  //     soBan: "TB005",
  //     monAn: [
  //       {
  //         id: 1,
  //         tenMon: "Nước ép táo",
  //         soLuong: 2,
  //         gia: 20000,
  //         tongTien: 40000,
  //       },
  //     ],
  //   },
  //   {
  //     soBan: "TB005",
  //     monAn: [
  //       {
  //         id: 1,
  //         tenMon: "Nước ép táo",
  //         soLuong: 2,
  //         gia: 20000,
  //         tongTien: 40000,
  //       },
  //     ],
  //   },
  //   {
  //     soBan: "TB005",
  //     monAn: [
  //       {
  //         id: 1,
  //         tenMon: "Nước ép táo",
  //         soLuong: 2,
  //         gia: 20000,
  //         tongTien: 40000,
  //       },
  //     ],
  //   },
  //   {
  //     soBan: "TB005",
  //     monAn: [
  //       {
  //         id: 1,
  //         tenMon: "Nước ép táo",
  //         soLuong: 2,
  //         gia: 20000,
  //         tongTien: 40000,
  //       },
  //     ],
  //   },
  // ];
  const [listTable, setListTable] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);

  const getDataTable = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/listTable");
      setLoading(false);
      setListTable(response.data);
    } catch (e) {
      setLoading(false);
      console.error("Error fetching data:", e);
    }
  };

  useEffect(() => {
    getDataTable();
  }, []);
  return (
    <MyContextDataTable.Provider
      value={{ listTable, loading, selectedTable, setSelectedTable }}
    >
      {children}
    </MyContextDataTable.Provider>
  );
}

export default ContextDataTable;
