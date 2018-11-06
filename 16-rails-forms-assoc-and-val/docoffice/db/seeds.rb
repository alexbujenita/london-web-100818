# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Doctor.destroy_all
Office.destroy_all
Visit.destroy_all
Patient.destroy_all

office = Office.create(name: 'Spitalfields')
Office.create(name: 'Ldn bridge')
Office.create(name: 'Spychowo')
Office.create(name: 'Moscow')

w = Doctor.create(name: 'dr Ndagia', specialty: 'the cookie guy', office: office)

pj = Patient.create(name: 'john')
pm = Patient.create(name: 'mary')
pj2 = Patient.create(name: 'joseph')
pm2 = Patient.create(name: 'muhhamad')
pk = Patient.create(name: 'krzysztof brzeczyszczykiewicz')

Visit.create(doctor: w ,patient: pj)
Visit.create(doctor: w ,patient: pj2)
Visit.create(doctor: w ,patient: pm)
Visit.create(doctor: w ,patient: pm2)
Visit.create(doctor: w ,patient: pk)

p 'everyting worked! seed OK'
