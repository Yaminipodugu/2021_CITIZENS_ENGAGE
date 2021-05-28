package models;
import  javax.persistence.*;


@Entity
public class Feedback {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    //public Long id;

    public String Name;

    public String Email;

    //public String Mobile;

   // public String Password;

    public String message;
    public int rating;


}
