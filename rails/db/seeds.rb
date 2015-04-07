environment_seed_file = File.join(Rails.root, 'db', 'seeds', "#{Rails.env}.rb")

def seed_image(file_name)
  File.open(File.join(Rails.root, "/lib/assets/thriftImages/#{file_name}.jpg"))
end

Spot.create(name: "Workshop Vintage", location: "4011 North Williams Avenue
Portland, OR 97227", phone: "(971) 319-2367", kind: "Thrift", price_range: "$$", style: "Vintage, Consignment, Accessories", hours: "Mon-Fri 11:00am-6:00pm, Sat 10:00am-6:00pm, Sun 10:00am-5:00pm", card?: true , dates: nil )

Spot.create(name: "Village Merchants", location: "4035 SE Division St
Portland, OR 97202", phone: "(503) 234-6343", kind: "Thrift", price_range: "$", style: "A little o' eerything", hours: "Mon-Sat 10:00am-7:00pm, Sun 10:00am-6:00pm", card?: true, dates: nil )

Spot.create(name: "Red Fox Vintage", location: "3014 NE Killingsworth Portland, OR 97211", phone: "(503) 206-4540", kind: "Thrift", price_range: "$$", style: "Antiques, Accessories, Fun Clothes", hours: "Mon-Sun 11:00am-6:00pm", card?: true , dates: nil )

Spot.create(name: "Rerun", location: "707 NE Fremont St Portland, OR 97212", phone: "(503) 517-3786", kind: "Thrift", price_range: "$", style: "Vintage Home Decor and Apparel", hours: "Tues CLOSED Mon, Wed-Sat 10:30am-6:30pm, Sun 11:00am-5:00pm", card?: true , dates: nil)

Spot.create(name: "Animal Traffic", location: "4000 N Mississippi Ave
Portland, OR 97227", phone: "(503)249-4000", kind: "Thrift", price_range: "$$", style: "Flannels, Vintage, Local Artisan Crafts", hours: "Sun-Thurs 11:00am-6:00pm, Fri-Sat 11:00am-7:00pm", card?: true, dates: nil )

Spot.create(name: "Modo Boutique", location: "729 E Burnside St Ste 103 Portland, OR 97214", phone: "(503)232-3056", kind: "Thrift", price_range: "$$", style: "Designer consignment, super cute!", hours: "Mon-Sun 11:00am-6:00pm", card?: true, dates: nil )

Spot.create(name: "Adorned In Grace", location: "4949 SW 76th Ave
Portland, OR 97225", phone: "(971) 244-1583", kind: "Thrift", price_range: "$", style: "Bridal Consignment", hours: "Sun-Mon CLOSED, Tues-Fri 1:00pm-5:00pm, Sat 10:00am-5:00pm", card?: true , dates: nil )
