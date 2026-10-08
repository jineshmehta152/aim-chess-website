"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface BookingModalContextType {
  isOpen: boolean;
  openBookingModal: (initialEventType?: string) => void;
  closeBookingModal: () => void;
  selectedEventType: string;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <BookingModalContext.Provider
      value={{
        isOpen,
        openBookingModal,
        closeBookingModal,
        selectedEventType,
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
