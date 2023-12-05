import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";
import { IoIosMore } from "react-icons/io";

const Table = ({
  players,
  setShowActionModel,
  setSelectedPlayer,
  search,
  showImportModel,
}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (search.length > 0) {
      var searchData = data.filter((i, j) => {
        return i?.playerName.includes(search);
      });
      console.log(searchData);
      setData(searchData);
    } else {
      let temp = [];
      players?.map((i) => {
        let obj = {};
        obj.playerName = i["Player Name"];
        obj.jerseyNumber = i["Jersey Number"];
        obj.starter = i["Starter"];
        obj.position = i["Position"];
        obj.height = (i["Height"] / 100).toFixed(2) + " m";
        obj.weight = i["Weight"] + " kg";
        obj.nationality = i["Nationality"];
        obj.appearances = i["Appearances"];
        obj.minutesPlayed = i["Minutes Played"];
        obj.countryFlag = i["Flag Image"];
        temp.push(obj);
      });
      setData(temp);
    }
  }, [search]);
  useEffect(() => {
    let temp = [];
    players?.map((i) => {
      let obj = {};
      obj.playerName = i["Player Name"];
      obj.jerseyNumber = i["Jersey Number"];
      obj.starter = i["Starter"];
      obj.position = i["Position"];
      obj.height = (i["Height"] / 100).toFixed(2) + " m";
      obj.weight = i["Weight"] + " kg";
      obj.nationality = i["Nationality"];
      obj.appearances = i["Appearances"];
      obj.minutesPlayed = i["Minutes Played"];
      obj.countryFlag = i["Flag Image"];
      temp.push(obj);
    });
    setData(temp);
  }, [players]);

  // Sample columns
  const columns = React.useMemo(
    () => [
      { Header: "Player Name", accessor: "playerName" },
      { Header: "Jersey Number", accessor: "jerseyNumber" },
      { Header: "Starter", accessor: "starter" },
      { Header: "Position", accessor: "position" },
      { Header: "Height", accessor: "height" },
      { Header: "Weight", accessor: "weight" },
      { Header: "Nationality", accessor: "nationality" },
      { Header: "Appearances", accessor: "appearances" },
      { Header: "Minutes Played", accessor: "minutesPlayed" },
      { accessor: "extraColumn" },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div
      style={{
        width: "94%",
        height: "80vh",
        marginLeft: 40,
        borderRadius: 8,
        backgroundColor: colors.neturalBlack2,
        paddingLeft: 13,
        marginTop: 40,
        marginBottom: 40,
        overflowY: "scroll",
      }}
      className="your-scrollbar-hidden-class"
    >
      {players && players.length === 0 ? (
        <div
          style={{
            width : "94%",
            height : "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection : "column",
          }}
        >
          <div
            style={{
              color: colors.textNormal,
              fontFamily: fonts.primaryFont,
              fontSize: fonts.mediumSize,
              fontWeight: fonts.regularWeight,
            }}
          >
            You don't have any players on the roster.
          </div>
          <div>
            <button
              onClick={() => {
                showImportModel();
              }}
              style={{
                color: colors.primary,
                border : "none",
                cursor : "pointer",
                background : "none",
                fontSize : fonts.mediumSize,
                fontWeight : fonts.regularWeight,
                fontFamily : fonts.primaryFont,
                marginTop : 10
              }}
            >
              Import Team
            </button>
          </div>
        </div>
      ) : (
        <table {...getTableProps()} style={{ width: "100%", paddingTop: 10 }}>
          <thead style={{ height: 30 }}>
            {headerGroups?.map((headerGroup) => (
              <tr {...headerGroup?.getHeaderGroupProps()}>
                {headerGroup?.headers?.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      textAlign: "left",
                      color: colors.textNormal,
                      fontWeight: fonts.regularWeight,
                      fontSize: fonts.smallSize,
                    }}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows?.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} style={{ height: 50 }}>
                  {row?.cells?.map((cell, i) => (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        textAlign: "left",
                        height: 21,
                        fontFamily: fonts.primaryFont,
                        fontSize: fonts.mediumSize,
                        fontWeight: fonts.regularWeight,
                        color: colors.textNormal,
                      }}
                    >
                      {i == 0 && (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={row.original.countryFlag}
                            style={{
                              alignSelf: "center",
                              marginRight: 10,
                              width: 24,
                              height: 24,
                            }}
                          />
                          {cell?.render("Cell")}
                        </div>
                      )}
                      {i != 0 && cell.render("Cell")}
                    </td>
                  ))}
                  <td
                    style={{
                      textAlign: "left",
                      height: 21,
                      fontFamily: fonts.primaryFont,
                      fontSize: fonts.mediumSize,
                      fontWeight: fonts.regularWeight,
                      color: colors.textNormal,
                    }}
                  >
                    <IoIosMore
                      onClick={() => {
                        setShowActionModel(true);
                        setSelectedPlayer(i);
                      }}
                      style={{ cursor: "pointer" }}
                      size={fonts.mediumSize}
                      color={colors.textNormal}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
