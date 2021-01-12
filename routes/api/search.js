const express = require('express');
const router = express.Router();
const Data = require('../../models/Data');

router.post('/', async(req,res) => {
    
    const searchString =  req.body.searchString;

    try {
        let results = await Data.find({ Title: { $regex: `${searchString}`, $options:"i" }});

        if(results.length === 0 ){
            const resultsIndex =await Data.find({ $text: { $search: searchString,$caseSensitive: false } },
                            { score: { $meta: "textScore" } }
                        ).sort( { score: { $meta: "textScore" } });

            results  = results.concat(resultsIndex)
        }

        const sourceCount = results.map(result => result.Source).reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
        const frequencyCount = results.map(result => result.Frequency).reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
        const unitCount = results.map(result => result.Unit).reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
        const tags = results.map(result => result.Tags.split(',')).flat(1);

        const tagsCount = tags.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});

        const filters = [
            {category : 'Source',
            filterItems : sourceCount},
            {category : 'Frequency',
            filterItems : frequencyCount},
            {category : 'Unit',
            filterItems : unitCount},
            {category : 'Tags',
            filterItems : tagsCount}
        ]

        const output = {
            results : results,
            filters : filters
        }
        
        res.json(output)
    } catch (error) {

        res.status(400).json({error:error.message})
        
    }

    
})

module.exports = router;