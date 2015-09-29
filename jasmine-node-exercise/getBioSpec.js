/**
 * Created by BrayanRosas on 9/29/2015.
 */

var GetBio=require('./biography.js')

describe ('GetBiography',function(){



    it('should that the method shows the name and the age , send in the method',function(){


        var actRes= GetBio('Pepito Perez',21);
        var name='Pepito Perez';
        var age=21;
        var expRes='Hi, my name is ' + name + ', I am ' + age + 'years old and I am a nice guy';

        //Validation
        expect(actRes).toEqual(expRes);

    });




    it('Validation that type a two parameters',function(){

        expect(function(){
             GetBio('Pepito Perez',21);

        }).toThrow('Need name and age to provide a biografy');

    });

    it('Validation that age is a number',function(){

        expect(function(){
             GetBio('Pepito Perez',21);

        }).toThrow('Error: Invalid age');

    });



});
