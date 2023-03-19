import React from 'react';

import {
  Section
} from './Profile.styled';


import { UserNav } from "../../components/UserNav/UserNav"
import  MovieSearch from "../MovieSearch/MovieSearch"



export const Profile = () => {
  
  return (
    <>
 
        <Section>
            <UserNav/>
             <MovieSearch/>

        </Section>
    


    </>
  );
};
