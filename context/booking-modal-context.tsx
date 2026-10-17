"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface BookingModalContextType {
  isOpen: boolean;
  openBookingModal: (initialEventType?: string) => void;
  closeBookingModal: () => void;
  selectedEventType: string;
  isStudentLoginOpen: boolean;
  openStudentLoginModal: () => void;
  closeStudentLoginModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isStudentLoginOpen, setIsStudentLoginOpen] = useState(false);
  const [selectedEventType, setSelectedEventType] = useState("");

  const openBookingModal = (initialEventType?: string) => {
    if (initialEventType) {
      setSelectedEventType(initialEventType);
    }
    setIsOpen(true);
  };

  const closeBookingModal = () => {
    setIsOpen(false);
  };

  const openStudentLoginModal = () => {
    if (typeof window !== "undefined") {
      window.open("https://classroom.aimchessacademy.com", "_blank", "noopener,noreferrer");
    }
  };

  const closeStudentLoginModal = () => {
    setIsStudentLoginOpen(false);
  };

  return (
    <BookingModalContext.Provider
      value={{
        isOpen,
        openBookingModal,
        closeBookingModal,
        selectedEventType,
        isStudentLoginOpen,
        openStudentLoginModal,
        closeStudentLoginModal,
      }}
    >
      {children}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return context;
}
