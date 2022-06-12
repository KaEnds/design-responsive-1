import React from 'react'
import { Container, Image } from 'react-bootstrap'
import { AiOutlineDown } from "react-icons/ai";
import '../style/Mainsection.css'

function Mainsection() {
  return (
    <div>
      <Container className='p-0 position-relative' fluid>
        <Image className='w-100 mainIMG' src='https://images4.alphacoders.com/928/928722.jpg' ></Image>
        <p className='position-absolute start-50 translate-middle Logo-Heading text-white logo'>Forest Touring</p>
        <p className='display-4 position-absolute start-50 translate-middle text-white downbutton'>
            <p className='fs-4'>Go down here</p>
            <AiOutlineDown />
        </p>

        <div className="ending"></div>
      </Container>
    </div>
  )
}

export default Mainsection
