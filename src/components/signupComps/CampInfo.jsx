import React, { useState, useEffect } from "react";
import campMap from "/campingSpots.svg";

function CampInfo({ formData, setFormData, checkboxLabels }) {
  const [areaIsChecked, setAreaIsChecked] = useState([]);

  useEffect(() => {
    let campsites = [
      { id: 1, campsite: checkboxLabels[16] },
      { id: 2, campsite: checkboxLabels[17] },
      { id: 3, campsite: checkboxLabels[18] },
      { id: 4, campsite: checkboxLabels[19] },
      { id: 5, campsite: checkboxLabels[20] },
    ];

    setAreaIsChecked(
      campsites.map((d) => {
        return {
          select: false,
          value: d.campsite,
          id: d.id,
        };
      })
    );
  }, []);

  return (
    <div className="camp-container">
      <div className="check-container">
        <div className="check-header">
          <h3>Campsite</h3>
          <p>* Click on the map and choose where to camp</p>
        </div>

        <div className="check-body camp-check">
          {areaIsChecked.map((d, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={d.id}
                value={d.value}
                checked={d.select}
                onChange={(event) => {
                  let checked = event.target.checked;

                  setAreaIsChecked(
                    areaIsChecked.map((data) => {
                      if (d.id === data.id) {
                        data.select = checked;
                      } else {
                        data.select = !checked;
                      }
                      return data;
                    })
                  );
                  setFormData({ ...formData, campsite: event.target.value });
                }}
              ></input>
              <div>
                <span>{d.value}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={"check-body camp-map"}>
          <img className={"campMap"} useMap="#image-map" src={campMap} alt="Campsite Map" />

          <map name="image-map">
            <area
              alt="Helheim"
              value="Helheim"
              title="Helheim"
              onClick={(e) => {
                setFormData({ ...formData, campsite: e.target.title });
                setAreaIsChecked(
                  areaIsChecked.map((data) => {
                    console.log("data", Object.values({ ...data }));
                    const data1 = Object.values({ ...data });
                    console.log("data2", data1[1]);

                    if (e.target.title === data1[1]) {
                      console.log("isMatched");
                      data.select = true;
                      console.log("is true");
                      // data.select = true;
                    } else {
                      console.log("is false");
                      data.select = false;
                    }
                    return data;
                  })
                );
              }}
              coords="80,242,77,201,81,176,92,150,103,120,134,79,163,65,188,58,161,38,125,30,
              109,30,89,27,76,34,62,41,49,50,32,63,24,74,16,95,3,126,4,160,15,184,30,209,46,226,62,236"
              shape="poly"
            ></area>

            <area
              alt="Svartheim"
              value="Svartheim"
              title="Svartheim"
              onClick={(e) => {
                setFormData({ ...formData, campsite: e.target.title });
                setAreaIsChecked(
                  areaIsChecked.map((data) => {
                    console.log("data", Object.values({ ...data }));
                    const data1 = Object.values({ ...data });
                    console.log("data2", data1[1]);

                    if (e.target.title === data1[1]) {
                      console.log("isMatched");
                      data.select = true;
                      console.log("is true");
                    } else {
                      console.log("is false");
                      data.select = false;
                    }
                    return data;
                  })
                );
              }}
              coords="283,70,294,48,313,29,330,15,355,4,383,3,405,1,438,5,464,17,490,35,496,42,480,57,473,65,460,78,448,93,435,109,426,117,404,127,383,128,364,127,342,116,327,103,301,90"
              shape="poly"
              fill=""
            ></area>

            <area
              alt="Nilfheim"
              value="Nilfheim"
              title="Nilfheim"
              onClick={(e) => {
                setFormData({ ...formData, campsite: e.target.title });
                setAreaIsChecked(
                  areaIsChecked.map((data) => {
                    console.log("data", Object.values({ ...data }));
                    const data1 = Object.values({ ...data });
                    console.log("data2", data1[1]);

                    if (e.target.title === data1[1]) {
                      console.log("isMatched");
                      data.select = true;
                      console.log("is true");
                    } else {
                      console.log("is false");
                      data.select = false;
                    }
                    return data;
                  })
                );
              }}
              coords="253,207,260,199,271,192,282,189,303,189,318,196,333,207,348,213,370,217,388,213,414,205,433,200,449,191,463,184,477,178,483,184,483,209,481,227,477,240,469,251,454,271,439,279,421,293,400,299,386,300,370,302,355,302,337,301,318,296,303,290,290,280,278,269,267,252,259,240,251,220"
              shape="poly"
            ></area>

            <area
              alt="Muspelheim"
              value="Muspelheim"
              title="Muspelheim"
              onClick={(e) => {
                setFormData({ ...formData, campsite: e.target.title });
                setAreaIsChecked(
                  areaIsChecked.map((data) => {
                    console.log("data", Object.values({ ...data }));
                    const data1 = Object.values({ ...data });
                    console.log("data2", data1[1]);

                    if (e.target.title === data1[1]) {
                      console.log("isMatched");
                      data.select = true;
                      console.log("is true");
                    } else {
                      console.log("is false");
                      data.select = false;
                    }
                    return data;
                  })
                );
              }}
              coords="102,351,98,361,95,373,95,386,92,399,88,407,80,425,81,441,88,475,98,496,105,508,119,521,136,529,154,531,140,539,129,542,111,545,92,544,72,542,55,536,41,530,27,520,20,508,8,490,1,462,3,440,6,422,11,400,27,379,45,368,70,355"
              shape="poly"
            ></area>

            <area
              alt="Alfheim"
              value="Alfheim"
              title="Alfheim"
              onClick={(e) => {
                setFormData({ ...formData, campsite: e.target.title });
                setAreaIsChecked(
                  areaIsChecked.map((data) => {
                    console.log("data", Object.values({ ...data }));
                    const data1 = Object.values({ ...data });
                    console.log("data2", data1[1]);

                    if (e.target.title === data1[1]) {
                      console.log("isMatched");
                      data.select = true;
                      console.log("is true");
                    } else {
                      console.log("is false");
                      data.select = false;
                    }
                    return data;
                  })
                );
              }}
              coords="311,388,324,394,330,408,339,425,344,439,346,451,347,470,341,493,336,510,322,531,307,542,288,556,273,560,251,562,227,561,212,557,199,548,188,541,176,529,174,523,170,519,191,504,210,499,231,497,257,484,276,477,299,462,313,445,320,419,317,400,313,396"
              shape="poly"
            ></area>
          </map>

          
        </div>
      </div>
    </div>
  );
}

export default CampInfo;
