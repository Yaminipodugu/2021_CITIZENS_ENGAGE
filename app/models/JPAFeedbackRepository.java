package models;

import play.db.jpa.JPAApi;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.xml.soap.Name;
import java.util.List;
import java.util.concurrent.CompletionStage;
import java.util.function.Function;
import java.util.stream.Stream;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import java.lang.Exception;
import javax.persistence.NoResultException;

import static java.util.concurrent.CompletableFuture.supplyAsync;


public class JPAFeedbackRepository implements FeedbackRepository {

    private final JPAApi jpaApi;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public JPAFeedbackRepository(JPAApi jpaApi, DatabaseExecutionContext executionContext) {
        this.jpaApi = jpaApi;
        this.executionContext = executionContext;
    }

    @Override

  /*  public CompletionStage<String> addfeedback(String Name,String Email,String message,Long rating) {
        return supplyAsync(() -> wrap(em -> addfeedback(em,Name,Email,message,rating)), executionContext);
    }*/

    public  CompletionStage<Feedback> addfeedback(Feedback feedback) {
        return supplyAsync(() -> wrap(em -> insert(em, feedback)), executionContext);
    }

    private <T> T wrap(Function<EntityManager, T> function) {
        return jpaApi.withTransaction(function);
    }

    private Feedback insert(EntityManager em, Feedback feedback) {
        em.persist(feedback);
        return feedback;
    }

//        }
//        catch(NoResultException e){
//            return null;
//        }
//
//
//}


   /*private int addfeedback(EntityManager em,String Name,String Email,String message,Long rating) {
        int count = em.createQuery("update User set  message = :message,rating= :rating where Name=:name").setParameter("name", Name).setParameter("message", message).setParameter("rating", rating).executeUpdate();
        //int count1 = em.createQuery("Update Complaint set Email= :Email ,Name = :Name where Id=:Id").setParameter("Email",Email).setParameter("Name",Name).setParameter("Id",Id).executeUpdate();
        return count;
    }*/

}
