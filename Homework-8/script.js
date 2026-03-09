//image array
var viewFinderArray = new Array();

class ViewFinder {

    constructor(title, image, description, author, year) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.year = year;
    }

    // string method
        toString()
    {
        return "Title: " + this.title;
        return "Image: " + this.image;
        return "Description: " + this.description;
        return "Author: " + this.author;
        return "Year: " + this.year;

    }

    get theTitle()
    {
        return this.title;
        return this.image;
        return this.description;
        return this.author;
        return this.year;

    }

}

    function initializeArray(params) {
        // create objects

        /*
        Links to all the sources of text and images used in the project:

        Earthrise:
        https://en.wikipedia.org/wiki/Earthrise

        Fannie Lou Hamer Singing:
        https://high.org/collection/fannie-lou-hamer-singing-march-against-fear-mississippi/

        Great Barrier Reef:
        image: https://oceanimagebank.theoceanagency.org/coral-bleaching?img=YGX_LxMAACAAYVIm
        description: https://www.barrierreef.org/the-reef/threats/coral-bleaching

        Gay Pride Day:
        https://www.advocate.com/photography/10-photos-lgbtq-history#rebelltitem7


        No Kings- Missoula 2025:
        https://missoulacurrent.com/no-kings-missoula/
        
    
        */
        
        var myViewFinder = new ViewFinder("EarthRise", "imgs/earthRise.jpg", "Earthrise is a photograph of Earth that was taken from lunar orbit during the Apollo 8 mission. It was the first photograph of Earth taken by a human, previous ones were taken robotically and in black-and-white by the Lunar Orbiter program robotic probes. It bears significance in the beginning of the environmental movement.", "William Anders", "1968");

        var myViewFinder1 = new ViewFinder("Fannie Lou Hamer Singing", "imgs/fannieSinging.png", "Fannie Lou Hamer, the youngest of twenty children in a family of sharecroppers, who came to prominence during the 1964 Democratic Convention as the leader of the Mississippi Freedom Democratic Party, which challenged the all-White regular delegation. Here, Hamer leads a round of “We Shall Overcome,” the closing anthem at most movement gatherings. Fannie was a powerful voice for civil rights, women's rights, and social justice.", "Charmian Reading", "1966");

        var myViewFinder2 = new ViewFinder("Great Barrier Reef", "imgs/coralBleaching.jpg", "The past two decades have seen several widespread coral bleaching events on our Great Barrier Reef, with five mass bleaching events in the last eight years - the most recent one in 2025. However, this photo is from the 2017 event.", "The Ocean Agency", "2017");

        var myViewFinder3 = new ViewFinder("Gay Pride Day", "imgs/gayPrideDay.png", "PFLAG's origins date back to 1972; its first formal meeting was held in a Greenwich Village church in March 1973. Founded as Parents of Gays, the organization was started by three cisgender couples with queer children: Jeanne and Jules Manford, Amy and Dick Ashworth, and Bob and Elaine Benov. PFLAG is an organization that supports and advocates for LGBTQ+ rights and still exists today.", "Fred W. McDarrah", "1975");

        var myViewFinder4 = new ViewFinder("No Kings- Missoula 2025", "imgs/noKings.png", "The Missoula “No Kings” rally played out alongside thousands across the nation. An estimated 10,000 people marched through the streets of Missoula on a foggy Saturday morning, chanting their displeasure with the Trump administration and what they see as it's steady dismantling of democracy.", "Martin Kidston", "2025");

        //push objects
        viewFinderArray.push(myViewFinder);
        viewFinderArray.push(myViewFinder1);
        viewFinderArray.push(myViewFinder2);
        viewFinderArray.push(myViewFinder3);
        viewFinderArray.push(myViewFinder4);
    }

        
    function accessInformation() {
        var randomNumber = Math.floor(Math.random() * viewFinderArray.length);

        document.getElementById("title").innerHTML = viewFinderArray[randomNumber].title;
        document.getElementById("image").src = viewFinderArray[randomNumber].image;
        document.getElementById("description").innerHTML = viewFinderArray[randomNumber].description;
        document.getElementById("author").innerHTML = viewFinderArray[randomNumber].author;
        document.getElementById("year").innerHTML = viewFinderArray[randomNumber].year;
    }
