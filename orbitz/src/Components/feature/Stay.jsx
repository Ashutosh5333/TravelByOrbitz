import React, { useState } from "react";
import { Button, Checkbox, HStack, Input, Stack, Text,Box } from "@chakra-ui/react";
import "./stay.css";
import { Flex } from "@chakra-ui/react";
import styles from "./style.module.css";
import { FaUserAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import Main from "./Search/Main";
// import { India } from "./utils/Indiacity";
// console.log(India);
 import India from "../../Data.json"
 import City from "./CitySearch"

 export const Stay = () => {
  const [query, SetQuery] = useState({});

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   SetQuery({ ...query, [name]: value });
  // };
  // console.log(query)

  return (
    <>
      <div className={styles.box}>
        <div className={styles.Input}>
          <HStack
            textAlign="center"
            justifyItems={"center"}
            // border="1px solid gray"
            // float={"left"}
          >
          
           <City placeholder="Where You want to go" data={India}/>

            {/* <Input
              name="city"
              option="city"
              onChange={handleChange}
              placeholder="Where You want to go"
              textAlign={"center"}
              width={"200px"}
              height="50px"
              fontSize={14}
              fontWeight="500" />
               */}
          </HStack>

          {/* <div className={styles.cityy}>
               {
                  India.map((item)=>{
                    return <div 
                    key={item.id} value={item.option}> 
                    {item.city}</div>
                  })
                } 
           </div> */}

          <Input
            placeholder="Select Date and Time"
            label="Check-in"
            width="150px"
            height="50px"
            type="date"
            fontSize={20}
            color="#616161"
            variant="outlined"
            defaultValue="2022-11-14"
          />

          <Input
            placeholder="Select Date and Time"
            label="Check-out"
            width="150px"
            height="50px"
            type="date"
            fontSize={20}
            color="#616161"
            variant="outlined"
            defaultValue="2022-11-16"
          />

          <Box
            border="2px solid gray"
            width="200px"
            justifyContent={"center"}
            height="50px"
          >
            <HStack mt={"10px"} justifyContent="space-evenly">
              <FaUserAlt justifyContent="center" />
              <Text
                ml={"20px"}
                fontSize={20}
                fontWeight="450"
                textAlign="center"
              >
                Travelers
              </Text>
            </HStack>
          </Box>
        </div>

        <div className={styles.check}>
          <Stack spacing={25} direction="row">
            <Checkbox colorScheme="green">
              <input type={"checkbox"} />
              Add to Flight
            </Checkbox>
            <Checkbox colorScheme="green">
              <input type={"checkbox"} />
              Add to Car
            </Checkbox>
          </Stack>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button className={styles.but} variant="solid">
            Search
          </Button>
        </div>
      </div>
    </>
  );
};