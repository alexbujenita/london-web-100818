class DoctorsController < ApplicationController
  before_action :find_doctor, only: [:show, :edit, :update, :destroy]
  def index
    @doctors = Doctor.all
  end

  def show
  end

  def new
    @doctor = Doctor.new
    @offices = Office.all
    @patients = Patient.all
  end

  def create
    byebug
    @doctor = Doctor.create(doctor_params)
    byebug
    redirect_to doctor_path(@doctor)
  end

  def edit
  end

  def update
    @doctor.update(doctor_params)
    redirect doctor
  end

  def destroy
    @doctor.destroy
    redirect doctors_path
  end

  private

  def find_doctor
    @doctor = Doctor.find(params[:id])
  end

  def doctor_params
    params.require(:doctor).permit(:name, :specialty, {patient_ids: []}, :office_id)
  end
end
