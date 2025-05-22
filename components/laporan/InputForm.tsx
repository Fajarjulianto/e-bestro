"use client";

import React, { JSX } from "react";
import FormProgressBar from "../ui/FormProgressBar";
import { FormSelect } from "../ui/FormSelect";
import { FormInput } from "../ui/FormInput";
import UploadBox from "../ui/UploadBox";
import Button from "../Button";
import FormInputSemester from "./FormInputSemester";

function InputForm(): JSX.Element {
  return (
    <form className="p-2">
      <FormProgressBar />
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mr-3">
        <div className="flex flex-col gap-y-3">
          <FormSelect
            label="Semester"
            options={["1", "2", "3", "4", "5", "6", "7", "8"]}
            required
          />
          <FormInputSemester
            label="Indeks Prestasi Semester"
            placeholder="Nilai Indeks Prestasi Semester"
            required={true}
          />
          <UploadBox label="Upload Transkrip Nilai" />
        </div>
        <div className="flex flex-col gap-y-3">
          <FormInput
            label="Tanggal Bayar UKT"
            placeholder="Tanggal Bayar UKT"
            type="date"
            required={true}
            // onChange={()=> updateSemesterGradeIndex()}
          />

          <FormInput
            label="Indeks Prestasi Kumulatif"
            placeholder="Nilai Indeks Prestasi Kumulatif"
            required={true}
          />

          <UploadBox label="Upload bukti bayar UKT" />
        </div>
        <div className="col-span-1 md:col-span-2">
          <div className="flex gap-4 h-10 justify-center">
            <Button className="bg-white px-10 py-2 hover:text-primary hover:bg-secondary text-secondary border border-secondary">
              Batal
            </Button>
            <Button className="bg-secondary text-white hover:bg-white hover:text-primary hover:border-primary border border-secondary py-2 px-11">
              Kirim
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default InputForm;
