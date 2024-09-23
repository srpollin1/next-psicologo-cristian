// src/app/blog/page.js

"use client";

import React, { Suspense } from "react";
import Navbar2 from "../assets/Navbar2";
import Footer2 from "../assets/Footer2";

export default function AgendaAqui() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar2 />
      {/* Agenda Online / Reservo */}
      <div >
            <iframe
              style={{ overflow: 'hidden', borderRadius: '10px', marginBottom: '20px', marginTop: '70px'}}
              src="https://agendamiento.reservo.cl/makereserva/agenda/J0KRnRg0J0fO1G5f6U11ogh9m166IS"
              width="100%"
              height="400"
              frameBorder="0"
              title="Reservo Agenda">
            </iframe>
            <a rel="noopener noreferrer" style={{ color: 'white' }}>Powered by Reservo</a>
          </div>
      <Footer2 />
    </Suspense>
  );
}
