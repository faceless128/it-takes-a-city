// TO DO: We could use this if we wanted to create a seeds file for testing purposes
-- city seeds --
INSERT INTO city (name)
VALUE ("Detroit");
INSERT INTO city (name)
VALUE ("Chicago");
INSERT INTO city (name)
VALUE ("Tampa");
INSERT INTO city (name)
VALUE ("Denver");
INSERT INTO city (name)
VALUE ("Tampa");

-- foodbank seeds --
INSERT INTO foodbank (name, address, foodbank_id)
VALUE ("", "")

-- shelter seeds (additional seed if we have time)--
INSERT INTO shelter (address, name, shelter_id)
VALUE ("3535 3rd Ave, Detroit, MI 48201", "Detroit Rescue Mission", 1);

-- manager seeds --
INSERT INTO manager (first_name, last_name, phone, manager_id)
VALUE ("Michael", "Scott", 313-993-6703, 1);
