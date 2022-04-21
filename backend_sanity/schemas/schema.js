
import createSchema from "part:@sanity/base/schema-creator";


import schemaTypes from "all:part:@sanity/base/schema-type";
import about from "./about";
import contact from "./contact";
import skills from "./skills";
import projects from "./projects";


export default createSchema({
  
  name: "default",

  types: schemaTypes.concat([

    about,
    contact,
    skills,
    projects,
  ]),
});
