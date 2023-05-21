import React from "react"; 
import Card from "./Card"; 
import { useState } from "react";

const Cards = (props) =>{
    let courses = props.courses;
    let category = props.category;
    const [likedCourses,setLikedCourses] = useState([]);

   //get data in single array
    

     //return you a list of all courses recieved from aoi response
    const getCourses =(() =>{

        if(category ==="All"){
            let allCourses = [];
            Object.values(courses).forEach(array =>{
             array.forEach (courseData =>{
                 allCourses.push(courseData);
             });
            }) 
     
            return allCourses;  

        }
          else{
            //main sirf specific category ka dat array pass karunga
            return courses[category];
          }

       
    });

      
       
 

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4  ">
            {
             getCourses().map (course =>
                
                <Card key={course.id} 
                course = {course}
                likedCourses={likedCourses}
                setLikedCourses={setLikedCourses }/>
                
             )
        } 
        </div>
    )
}

export default Cards;