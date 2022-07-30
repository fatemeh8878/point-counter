import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Card, FormLabel, Grid, TextField } from "@mui/material";
const App = () => {
  const { handleSubmit, register } = useForm();
  const [value, setValue] = useState("");
  const [point, setPoint] = useState(0);
  const tree = ["ش", "پ", "ژ", "چ", "ث"];
  const one = ["ج", "ن", "خ", "ف", "ز", "ب", "ظ", "ض", "غ"];
  const two = ["ت", "ق"];
  const dontpoint = ["‌ی"];
  const space = ["‌"];
  const handleChange = (data, e) => {
    setValue(data.value);
  };
  useEffect(() => {
    var splited = value.split("");
    var dotCounter = splited.length - 1;
    for (var i = 0; i < splited.length; i++) {
      const letter = splited[i];
      if (one.includes(letter)) {
        setPoint((prev) => prev + 1);
      }
      if (two.includes(letter)) {
        setPoint((prev) => prev + 2);
      }
      if (tree.includes(letter)) {
        setPoint((prev) => prev + 3);
      }
      console.log(space[0].includes(letter));
      if (dotCounter !== i && dontpoint[0].includes(letter)) {
        if (splited[i + 1] !== " ") {
          setPoint((prev) => prev + 2);
        }
        if (space[0].includes(letter)) {
          setPoint((prev) => prev - 4);
        }
      }
    
    }
  }, [value]);
  return (
    <div style={{ background: "#B270A2", height: "100vh" }}>
      <div
        style={{ position: "absolute", marginTop: "10%", marginRight: "30%" }}
      >
        <Card
          style={{
            width: "500px",
            padding: 30,
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            background: "rgba(255, 143, 177,0.6)",
          }}
        >
          <form onSubmit={handleSubmit(handleChange)}>
            <Grid container>
              <Grid item xs={12}>
                <FormLabel style={{ color: "#000", marginBottom: 20 }}>
                  متن شما
                </FormLabel>
                <TextField
                  id="outlined-textarea"
                  style={{
                    width: "100%",
                  }}
                  {...register("value")}
                  onChange={(e) =>
                    e.target.value === "" &&
                    (setPoint(0), setValue(e.target.value))
                  }
                  multiline
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  style={{
                    color: "#fff",
                    background: "#7A4495",
                    marginTop: 20,
                    width: 130,
                    fontSize: 15,
                  }}
                >
                  محاسبه نقطه
                </Button>
              </Grid>
            </Grid>
          </form>
          <h3>متن شما {point === 0 ? "-" : point} نقطه دارد</h3>
        </Card>
      </div>
    </div>
  );
};

export default App;
