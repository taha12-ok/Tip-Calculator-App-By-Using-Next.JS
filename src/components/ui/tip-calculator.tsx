"use client"; 

import { useState, ChangeEvent } from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TipCalculatorComponent() {
  const [billAmount, setBillAmount] = useState<number | null>(null);
  const [tipPercentage, setTipPercentage] = useState<number | null>(null);
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const handleBillAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setBillAmount(parseFloat(e.target.value));
  };

  const handleTipPercentageChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setTipPercentage(parseFloat(e.target.value));
  };

  
  const calculateTip = (): void => {
    if (billAmount !== null && tipPercentage !== null) {
      const tip = billAmount * (tipPercentage / 100); 
      setTipAmount(tip);
      setTotalAmount(billAmount + tip); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#ffa500] to-[#ff6b6b] dark:from-gray-900 dark:to-gray-800 p-4">
  {/* Center the tip calculator card within the screen */}
  <Card className="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
    <CardHeader>
      {/* Header with title and description */}
      <CardTitle>Tip Calculator</CardTitle>
      <CardDescription>
        Enter the bill amount and tip percentage to calculate the tip and total.
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      {/* Input for bill amount */}
      <div className="grid gap-2">
        <Label htmlFor="bill-amount">Bill Amount</Label>
        <Input
          id="bill-amount"
          type="number"
          placeholder="Enter bill amount"
          value={billAmount !== null ? billAmount : ""}
          onChange={handleBillAmountChange}
        />
      </div>
      {/* Input for tip percentage */}
      <div className="grid gap-2">
        <Label htmlFor="tip-percentage">Tip Percentage</Label>
        <Input
          id="tip-percentage"
          type="number"
          placeholder="Enter tip percentage"
          value={tipPercentage !== null ? tipPercentage : ""}
          onChange={handleTipPercentageChange}
        />
      </div>
      {/* Button to calculate tip */}
      <Button onClick={calculateTip} className="bg-[#4caf50] hover:bg-[#43a047] text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
        Calculate
      </Button>
    </CardContent>
    <CardFooter className="grid gap-2">
      {/* Display the calculated tip amount */}
      <div className="flex items-center justify-between">
        <span>Tip Amount:</span>
        <span className="font-bold">${tipAmount.toFixed(2)}</span>
      </div>
      {/* Display the calculated total amount */}
      <div className="flex items-center justify-between">
        <span>Total Amount:</span>
        <span className="font-bold">${totalAmount.toFixed(2)}</span>
      </div>
    </CardFooter>
  </Card>
</div>

  );
}