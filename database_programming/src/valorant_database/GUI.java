package valorant_database;

import java.sql.Connection;
import java.sql.CallableStatement;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Types;
import java.util.Scanner;

public class GUI {
	static final String databasePrefix ="cs366-2241_monroei22";
    static final String netID ="monroei22"; // Please enter your netId
    static final String hostName ="washington.uww.edu"; //140.146.23.39 or washington.uww.edu
    static final String databaseURL ="jdbc:mariadb://"+hostName+"/"+databasePrefix;
    static final String password="im7618"; // please enter your own password
  
    private Connection connection = null;
    private Statement statement = null;
    private ResultSet resultSet = null;
    
    public void Connection(){
  
      try {
    	    Class.forName("org.mariadb.jdbc.Driver");
    	  	System.out.println("databaseURL"+ databaseURL);
            connection = DriverManager.getConnection(databaseURL, netID, password);
            System.out.println("Successfully connected to the database");
         }
        catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        catch (SQLException e) {
            e.printStackTrace();
        }
    } // end of Connection
    
    public void simple_query(String sql_query) {
	    
    	try {
    		statement = connection.createStatement();
    		resultSet = statement.executeQuery(sql_query); // for action queries, like insert, use execute instead

    		ResultSetMetaData metaData = resultSet.getMetaData();
    		int columns = metaData.getColumnCount();

    		for (int i=1; i<= columns; i++) {
    			System.out.print(metaData.getColumnName(i)+"\t");
    		}

    		System.out.println();

    		while (resultSet.next()) {
       
    			for (int i=1; i<= columns; i++) {
    				System.out.print(resultSet.getObject(i)+"\t\t");
    			}
    			System.out.println();
    		}
    	}
    	catch (SQLException e) {
    		e.printStackTrace();
    	}
    } // end of simple_query method
    
    public void create_GUI(GUI obj) {
    	System.out.println("Top 10 players:\n");
		String sql_query ="SELECT p.name FROM Players p WHERE p.win_percent > .50 LIMIT 10;";
		String input_1 = "";
		String input_2 = "";
		obj.simple_query(sql_query);
		boolean loop = true;
		
		while(loop) {
			System.out.println("\nOptions:"
					+ "\n1. List the players whose win rate is higher than 50%"
					+ "\n2. List the weapons that cost more than 1000 credits"
					+ "\n3. List the weapons that take longer than 1 second to equip"
					+ "\n4. List the weapons that reload less than 10 bullets per reload"
					+ "\n5. List the players whose most played agent's ultimate costs 8 points"
					+ "\n6. List the tweets that mention an agent who is a duelist"
					+ "\n7. Display the highest win rate among players whose 3rd most played agent is a controller"
					+ "\n8. Display information about the most played agent of the player 'zwe'"
					+ "\n9. List the players whose most played agent is a duelist and whose 1st basic ability costs less than 100 credits"
					+ "\n10. List the players whose most used weapon costs more than 4000 credits"
					+ "\n11. List the players whose most, 2nd most, or 3rd most played agent is a duelist"
					+ "\n12. Display the number of tweets that mention an agent who is an initiator"
					+ "\n13. Display the voice actor of a given player's most played agent (enter: player name, player tag)"
					+ "\n14. List the costs of a given player's 3 most used weapons (enter: player name, player tag)"
					+ "\n15. Display the number of players whose most used weapon matches a given weapon (enter: weapon name)"
					+ "\nexit\n");
			
			Scanner in = new Scanner(System.in);
			String input = in.nextLine();
			
			switch(input) {
			case "1":
				obj.simple_query("SELECT p.name FROM Players p WHERE p.win_percent > .50;");
				break;
			case "2":
				obj.simple_query("SELECT w.name FROM Weapons w WHERE w.price > 1000;");
				break;
			case "3":
				obj.simple_query("SELECT w.name FROM Weapons w WHERE w.velocity_to_equip > 1;");
				break;
			case "4":
				obj.simple_query("SELECT w.name FROM Weapons w WHERE w.bullets_on_charging<10;");
				break;
			case "5":
				obj.simple_query("SELECT p.name FROM Players p, Agents a WHERE p.agent_1=a.name AND a.ultimate_points = 8;");
				break;
			case "6":
				obj.simple_query("SELECT t.tweet FROM Tweets t, Agents a WHERE t.Agent = a.name AND a.role='Duelist';");
				break;
			case "7":
				obj.simple_query("SELECT max(win_percent) FROM Players p, (SELECT name FROM Agents WHERE role='Controller') z WHERE agent_1=z.name;");
				break;
			case "8":
				obj.simple_query("SELECT * FROM Agents a, (SELECT agent_1 FROM Players WHERE name='zwe') z WHERE a.name=z.agent_1;");
				break;
			case "9":
				obj.simple_query("SELECT p.name, p.tag FROM Players p, (SELECT name FROM Agents WHERE basic1_creds<150 AND role='Duelist') z WHERE z.name=p.agent_1;");
				break;
			case "10":
				obj.simple_query("SELECT p.name FROM Players p,(SELECT name FROM  Weapons WHERE price>4000) z WHERE p.gun1_name=z.name;");
				break;
			case "11":
				obj.simple_query("SELECT p.name FROM Players p, (SELECT name FROM Agents WHERE role='Duelist') z WHERE p.agent_1=z.name OR p.agent_2=z.name OR p.agent_3=z.name;");
				break;
			case "12":
				obj.simple_query("SELECT count(name) FROM Tweets t, (SELECT name FROM Agents WHERE role='Initiator') z WHERE t.Agent=z.name;");
				break;
			case "13":
				System.out.println("enter: player name");
				input_1 = in.nextLine();
				System.out.println("enter: player tag");
				input_2 = in.nextLine();
				obj.simple_query("call getAgent1Voice('" + input_1 + "', '" + input_2 + "')");
				break;
			case "14":
				System.out.println("enter: player name");
				input_1 = in.nextLine();
				System.out.println("enter: player tag");
				input_2 = in.nextLine();
				obj.simple_query("call getPlayersCosts('" + input_1 + "', '" + input_2 + "')");
				break;
			case "15":
				System.out.println("enter: weapon name");
				input_1 = in.nextLine();
				obj.simple_query("call getGun1Count('" + input_1 + "')");
				break;
			case "exit":
				loop = false;
				break;
			default:
				System.out.println("Invalid input");
				break;
			} 
		}
    } // end of create_GUI

	public static void main(String[] args) {
		GUI obj = new GUI();
		obj.Connection();
		obj.create_GUI(obj);
	}

}