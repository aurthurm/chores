<template>
    <div>
        <!-- Hero -->
        <Hero 
            :choreEntry="choreEntry"
        />
        <!-- Chores -->
        <section class="container">
        <div class="card-columns">
            <chore
                v-for="_chore in chores"
                :title="_chore.title"
                :location="_chore.location"
                :dateTime="_chore.dateTime"
                :message="_chore.message"
                :budget="_chore.budget"
                :posted="_chore.posted"
                :bids="_chore.bids"
                :status="_chore.status"
                :choreId="_chore.choreId"
                :key="_chore.title"
                ></chore>
        </div>
        </section>
    </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/chores/hero.vue";
import Chore from "@/components/chores/chore.vue";
export default {
    data(){
        return {
            choreEntry: "Find a chore and handle it",
            chores:[
                {
                title: "Need Help Gardening",
                location: "Gweru, Mkoba 2",
                dateTime: "03/06/2019  10:30",
                budget: 82,
                message: "lorem This card has a regular title and short paragraph of text below it. This card has a regular title and short paragraph of text below it.",
                posted: "2 days ago",
                bids: 5,
                status: "Open",
                choreId: '1'
                },
                {
                title: "Take my Dog for a Walk",
                location: "Bulawayo, Parklands",
                dateTime: "01/06/2019  09:00",
                budget: 45,
                message: "I need someone to walk my dod around for at least an hour. Its been long it needs to exercice. You must be a dog lover",
                posted: "2 seconds ago",
                bids: 0,
                status: "Open",
                choreId: '2'
                },
                {
                title: "Need  Killer Party Organiser",
                location: "Harare, Gendale",
                dateTime: "03/06/2019  10:30",
                budget: 30,
                message: "lorem This card has a regular title and short paragraph of text below it. This card has a regular title and short paragraph of text below it.",
                posted: "2 days ago",
                bids: 25,
                status: "Open",
                choreId: '3'
                },
                {
                title: "Someone help me unpack",
                location: "Kwekwe, Rutendo 2",
                dateTime: "03/06/2019  17:00",
                budget: 234,
                message: "I will be moving in a new are whre i knoe 0 people. Need help unpaking.",
                posted: "2 days ago",
                bids: 5,
                status: "Open",
                choreId: '4'
                }
            ]
        }
    },
    components: {
        Hero,
        Chore
    }
}
</script>