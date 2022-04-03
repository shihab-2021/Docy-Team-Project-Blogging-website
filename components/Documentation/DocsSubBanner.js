import { Box, Container} from "@mui/material";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import Link from 'next/link';

const DocsSubBanner = () => {
  return (
    <Box sx={{background:'#1F3341'}}>
     <Container sx={{py:2}}>
      <div className="flex justify-between text-gray-200  ">
      <div className="flex text-sm	items-center	">
       <>
       <Link href='/'> 
       <a >
       Home
       </a>
       </Link>
        <ArrowForwardIosRoundedIcon  sx={{fontSize:'15px'}}/></> 
       <> <Link href='/'> 
       <a >
       Docs
       </a>
       </Link> <ArrowForwardIosRoundedIcon  sx={{fontSize:'15px'}}/></>
       <a >Docy Documentation</a>
      </div>
      <div className="time text-sm	">
        <p> <AccessTimeRoundedIcon  sx={{fontSize:'17px'}}/> Updated on Jan 10, 2022</p>
      </div>
      </div>
     </Container>
    </Box>
  );
}

export default DocsSubBanner;