--1.Player strike rate  total runs divided by  match 

select  (totalruns/match)as strikerate , FirstName from Players;

--2. Average run rate total runs divided by overs
select (totalruns/noofballs) as runrate, FirstName from Players;

--3 Players top 3 matches  according to strike rate

select rival from Matches where firstName = "VIRAT" order by strikerate LIMIT 3

--4  Couple of Team who have played most matches with each other

select rivalname from IndianCountry where noofmatcheswon=(select MAX(noofmatcheswon) from IndianCountry);

--5.Success rate of team 1 against team 2
select (noofmatcheswon/noofmatcheslost*100) as Successrate from IndianCountry where rivalname='Australia';

--6 Player who scored 0 in matches
select firstname from Matches where score = 0;

--7 Player who have scored highest score ever in the Matches
select firstname,MAX(score) as highscore  from Matches;
