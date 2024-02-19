import { iBootstrap } from '../iBootstrap';
import { format } from 'date-fns';

/**
 * Classe para inicializar o banco de dados com dados de teste
 */
export class Bootstrap implements iBootstrap {
  private models: any;

  constructor(models: any) {
    this.models = models;
  }

  public async deleteDB(): Promise<void> {
    const bootstrapDb = this.models.Comment;

    await bootstrapDb.sequelize.query(`DELETE from base_user`);
    await bootstrapDb.sequelize.query(`DELETE from comment`);
    await bootstrapDb.sequelize.query(`DELETE from comment_vote`);
    await bootstrapDb.sequelize.query(`DELETE from member`);
    await bootstrapDb.sequelize.query(`DELETE from post`);
    await bootstrapDb.sequelize.query(`DELETE from post_vote`);
  }
  /**
   * função que faz inject de dados de teste no banco de dados
   * @returns void
   */

  // executes a set of custom queries - see bootstrapjmeter.spec.ts for example
  public async executeCustomQueries(queries: string[]): Promise<void> {
    const bootstrapDb = this.models.Comment;

    for (const query of queries) {
      await bootstrapDb.sequelize.query(query);
    }
  }

  public async bootstrapDataToDb(): Promise<string> {
    const bootstrapDb = this.models.Comment;

    await bootstrapDb.sequelize.query(
      ` INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("0e9d4aea-3542-4032-88f9-813619017fae", "luisafonso@dddforum.com", "LuísAfonso", "$2a$12$lNPmuH//UkzRTFTIBi/Ybu5YRYAuKnO36jtEtGiSdoGx7Gmu5g8ju", "2023-06-26 11:00:00", "2023-06-26 11:00:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("1771eddd-a493-407c-b75a-491e0407087f", "natalylucas@dddforum.com", "NatalyLucas", "$2a$12$YDqWZjeFaTp5f1xCAww.CeQ1lEm0gi46O28OjWZU5vg71Rl.RT2La", "2023-06-27 11:00:00", "2023-06-27 11:00:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("4370b417-413e-4915-baa5-495f3b9e3d5f", "nunopinto@dddforum.com", "NunoPinto", "$2a$12$wUHyIEjMkAb1PsqdRaFv0u7x9/rh99rOz.Kr6We9LRLMpICdXVfVa", "2023-06-28 11:00:00", "2023-06-28 11:00:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("86412d32-3688-474b-bfcc-54b65ceca860", "ricardocerqueira@dddforum.com", "RicardoCerqueir", "$2a$12$71tWDLZoO5zs9i465bXWMu8CfyBmNStdwXh.HorWjRe5.LkaV59SW", "2023-06-29 11:00:00", "2023-06-29 11:00:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("575a8c2e-29aa-4b80-95e5-c86d14b62fb9", "ritacastro@dddforum.com", "RitaCastro", "$2a$12$1jEeogE4fQPi46CSVl0nEeJ.Xm6d3w8g0q8eWTFU.LIeHe9igRc1a", "2023-06-30 11:00:00", "2023-06-30 11:00:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("709d1165-f57a-4fc7-9b64-d1abf342f1a2", "pauloteixeira@dddforum.com", "PauloTeixeira", "$2a$12$Dx.PoHBusG40YJKdyz85W.zZ/XMZMe1pSxdYkXeb2Cyrsy1VaFZSS", "2023-07-01 11:00:00", "2023-07-01 11:00:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("8a4cb78c-153b-4ff1-9859-f5a0fd91fabc", "mariadoaco@dddforum.com", "MariadoAço", "$2a$12$jhSMLZ/0.0sjiV66ZJS/t.KPqxGAf3yilDXfsY2Ug4L7VhOwmmqgi", "2023-08-04 10:15:00", "2023-08-04 10:15:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("d6addaa3-66f2-43b6-92b4-25055114bbd3", "tonidorock@dddforum.com", "TonydoRock", "$2a$12$Krcv2tCe7fVoIJF5W1hLcOU6u216RGKSBhTk6Hn6TePVlW9JS5lze", "2023-08-04 10:18:00", "2023-08-04 10:18:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("ddcf7479-1c81-4bad-954a-74dcbec7aef8", "zepoqueiro@dddforum.com", "ZePorqueiro", "$2a$12$jgQCGeojf0tnRE3a2OlouuLyWqJnaI1CMF9Sn0Mpz5UIVPGnHVZ/O", "2023-08-04 10:20:00", "2023-08-04 10:20:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("b623fb22-c6b5-4ab6-9e68-ced0b0e1aae0", "joaonabica@dddforum.com", "JoaoNabica", "$2a$12$z1ZNEOe4wqidrWvU5PDEa.Arabowqy22dQKGUBwG0RAqSmFNUhS.i", "2023-08-04 10:21:00", "2023-08-04 10:21:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("791de2da-5ddd-4f34-b392-c76cb271004c", "joaquimdogrelo@dddforum.com", "JoaquimdoGrelo", "$2a$12$ePvu873ePaGgsj5fdYaFiO49pO/SZyDA4S4w/7yu04Cx0mgdYt.R.", "2023-08-04 10:24:00", "2023-08-04 10:24:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("2a940551-e5f3-43ff-ad50-bb7f0b3139c9", "anaquibobo@dddforum.com", "AnaAquiBobo", "$2a$12$HwsI7Y0SJR.3ruQ6xFcQdOyy01kxxNbufKQmwZKeLHR.tMxqLZo6K", "2023-08-04 10:26:00", "2023-08-04 10:26:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("c01f1f57-42da-48a7-ad1c-835de7506114", "anabelarego@dddforum.com", "AnaBelaRego", "$2a$12$QmPgtdLt0tN347WEB4zXBOZ9KWQYBZHm.Qsjn0DWRB0D4zddVtW62", "2023-08-04 10:29:00", "2023-08-04 10:29:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("7a2ff8cb-b5c8-4650-8fee-bcf333a045b8", "paulobordel@dddforum.com", "PauloBordel", "$2a$12$3crL.ROYxwJw9udeB7CAV.Lt232YyCY5Gc51Zc33Jx6WmS7cyGgcm", "2023-08-04 10:31:00", "2023-08-04 10:31:00")`,
    );
    await bootstrapDb.sequelize.query(
      `  INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("443647fb-928e-4816-a10d-a9620584c605", "ambrosiodoschocolates@dddforum.com", "AmbrosioDoChoco", "$2a$12$ssh3xxuLeOLXIi780ZdwK.sc0KWHHpQW8Eore2AVoWjMv5OUDxT.6", "2023-08-04 10:33:00", "2023-08-04 10:33:00")`,
    );
    // Insert into base_user table
    await bootstrapDb.sequelize.query(
      `INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES 
  ("9f8a1c3a-7e79-4c43-aebb-4b799f3c1c19", "newmember1@dddforum.com", "newmember1", "$2a$12$hashedPasswordHere1", "2023-11-26 14:45:00", "2023-11-26 14:45:00")`,
    );

    // Insert into member table
    await bootstrapDb.sequelize.query(
      `INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES 
  ("b56b28ca-22d1-465a-9e1f-10e4c5d51b7a", "9f8a1c3a-7e79-4c43-aebb-4b799f3c1c19", 0, "2023-11-26 14:45:00", "2023-11-26 14:45:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("5a7799d4-dddf-4ae0-ad17-05b6d73fe60b", "0e9d4aea-3542-4032-88f9-813619017fae", 0, "2023-06-26 11:00:00", "2023-06-26 11:00:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("a6e313e9-2797-434a-a3d6-c8e2e81eeac2", "1771eddd-a493-407c-b75a-491e0407087f", 0, "2023-06-27 11:00:00", "2023-06-27 11:00:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("1425c4fb-ef64-4af8-8f35-a11dd0401fcb", "4370b417-413e-4915-baa5-495f3b9e3d5f", 0, "2023-06-28 11:00:00", "2023-06-28 11:00:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("73621c4d-139e-45cb-b3ea-52433283ec5a", "86412d32-3688-474b-bfcc-54b65ceca860", 0, "2023-06-29 11:00:00", "2023-06-29 11:00:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("1a67501a-4f06-4b25-b2aa-6c100fe26cf7", "575a8c2e-29aa-4b80-95e5-c86d14b62fb9", 0, "2023-06-30 11:00:00", "2023-06-30 11:00:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("3ded78b6-094e-401c-bf10-df10ee51accf", "709d1165-f57a-4fc7-9b64-d1abf342f1a2", 0, "2023-07-01 11:00:00", "2023-07-01 11:00:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("65335bd3-4562-412c-a397-c21e02164ad0", "8a4cb78c-153b-4ff1-9859-f5a0fd91fabc", 0, "2023-08-04 10:15:00", "2023-08-04 10:15:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("199ecb0a-e3fb-427e-b572-44d1c74c3e93", "d6addaa3-66f2-43b6-92b4-25055114bbd3", 0, "2023-08-04 10:18:00", "2023-08-04 10:18:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("e5840f10-3426-4bd2-b937-5fcebd7c8734", "ddcf7479-1c81-4bad-954a-74dcbec7aef8", 0, "2023-08-04 10:20:00", "2023-08-04 10:20:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("d78afee0-c240-4494-8ed3-45c02d86839c", "b623fb22-c6b5-4ab6-9e68-ced0b0e1aae0", 0, "2023-08-04 10:21:00", "2023-08-04 10:21:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("1e6fa417-9811-4f07-b685-b999198db383", "791de2da-5ddd-4f34-b392-c76cb271004c", 0, "2023-08-04 10:24:00", "2023-08-04 10:24:00")`,
    );
    await bootstrapDb.sequelize.query(
      `INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("d67596d3-5810-45d5-9ac4-74c9954bd514", "2a940551-e5f3-43ff-ad50-bb7f0b3139c9", 0, "2023-08-04 10:26:00", "2023-08-04 10:26:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("4c250dba-e672-4a9c-ae7c-f8f7cc5dfc09", "c01f1f57-42da-48a7-ad1c-835de7506114", 0, "2023-08-04 10:29:00", "2023-08-04 10:29:00")`,
    );
    await bootstrapDb.sequelize.query(
      `  INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("568791ce-f07a-46d1-8fc5-49b0ae451f64", "7a2ff8cb-b5c8-4650-8fee-bcf333a045b8", 0, "2023-08-04 10:31:00", "2023-08-04 10:31:00")`,
    );
    await bootstrapDb.sequelize.query(
      `  INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("9d6b17e0-783d-4e6d-b570-5df58c522ff2", "443647fb-928e-4816-a10d-a9620584c605", 0, "2023-08-04 10:33:00", "2023-08-04 10:33:00")`,
    );
    //Usado para testes NÃO MEXER
    await bootstrapDb.sequelize.query(
      ` INSERT INTO post (post_id, member_id, type, title, link, slug, points, total_num_comments, created_at, updated_at) VALUES ("bccbecce-6c75-4c52-9603-f277f88bb137", "3ded78b6-094e-401c-bf10-df10ee51accf", "link", "Este é o comentário do Paulo", "www.postman.com", "6666666-Postman", "45", "0", "2023-07-01 11:30:00", "2023-07-01 11:30:00")`,
    );
    //Usado para testes NÃO MEXER
    await bootstrapDb.sequelize.query(
      `   INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("af54cf8d-2bc3-4fc2-9529-d69d9d4480ba", "5a7799d4-dddf-4ae0-ad17-05b6d73fe60b", "text", "TypeScript", "<p>More info here www.typescriptlang.org</p>", "1111111-TypeScript", "100", "4", "2023-06-26 00:30:00", "2023-06-26 00:30:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO post (post_id, member_id, type, title, link, slug, points, total_num_comments, created_at, updated_at) VALUES ("27246765-204e-4ac0-9c31-39e230bb499b", "a6e313e9-2797-434a-a3d6-c8e2e81eeac2", "link", "GitHub", "www.github.com" , "2222222-GitHub", "90", "0", "2023-06-27 11:30:00", "2023-06-27 11:30:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("9459825f-8c57-4066-9197-550e2f1207b0", "1425c4fb-ef64-4af8-8f35-a11dd0401fcb", "text", "PlantUML", "<p>More info here https://plantuml.com/</p>", "3333333-PlantUML", "85", "0", "2023-06-28 11:30:00", "2023-06-28 11:30:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO post (post_id, member_id, type, title, link, slug, points, total_num_comments, created_at, updated_at) VALUES ("72f4a8db-6af8-4e31-b196-7760aa47ae83", "73621c4d-139e-45cb-b3ea-52433283ec5a", "link", "Cucumber", "https://cucumber.io", "4444444-Cucumber", "70", "0", "2023-06-29 11:30:00", "2023-06-29 11:30:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("2a641b88-a046-4be9-ae52-9cc2e58653a4", "1a67501a-4f06-4b25-b2aa-6c100fe26cf7", "text", "Docker", "<p>More info here https://hub.docker.com/</p>", "5555555-Docker", "65", "0", "2023-06-30 11:30:00", "2023-06-30 11:30:00")`,
    );

    await bootstrapDb.sequelize.query(
      ` INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("832182cc-2727-4e92-ac55-2ee476ab4392", "65335bd3-4562-412c-a397-c21e02164ad0", "text", "Godsmack", "<p>Godsmack is a very good heavy metal band</p>", "7777777-Godsmack", "20", "0", "2023-08-04 11:40:00", "2023-08-04 11:40:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("e7248565-4a5a-4a3a-b006-6428922fb4ce", "199ecb0a-e3fb-427e-b572-44d1c74c3e93", "text", "Metalica", "<p>Metalica is a very good heavy metal band</p>", "8888888-Metalica", "-90", "0", "2023-08-04 11:42:00", "2023-08-04 11:42:00")`,
    );
    await bootstrapDb.sequelize.query(
      `  INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("3d9d5d32-88d0-4caa-a5eb-2619f9462896", "e5840f10-3426-4bd2-b937-5fcebd7c8734", "text", "Megadeath", "<p>Megadeath is a very good heavy metal bandy</p>", "9999999-Megadeath", "-100", "0", "2023-08-04 11:43:00", "2023-08-04 11:43:00")`,
    );
    await bootstrapDb.sequelize.query(
      `  INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("304d5955-58e5-4a72-9780-1cc8877940ca", "d78afee0-c240-4494-8ed3-45c02d86839c", "text", "Black Sabath", "<p>Black Sabath is a very good heavy metal band</p>", "1010101-Black-Sabath", "-120", "0", "2023-08-04 11:44:00", "2023-08-04 11:44:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("b12cf3ae-8ae6-4fe9-a603-04e5da3394bb", "1e6fa417-9811-4f07-b685-b999198db383", "text", "Iron Maiden", "<p>Iron Maiden is very good heavy metal band</p>", "1212121-Iron-Maiden", "-130", "0", "2023-08-04 11:45:00", "2023-08-04 11:45:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("2aa2880f-6e1f-4bed-a28b-490aae310774", "d67596d3-5810-45d5-9ac4-74c9954bd514", "text", "ACDC", "<p>ACDC is very good heavy metal band</p>", "1313131-ACDC", "-140", "0", "2023-08-04 11:46:00", "2023-08-04 11:46:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("a5847739-aa0a-45d8-999e-5b75b643135e", "4c250dba-e672-4a9c-ae7c-f8f7cc5dfc09", "text", "Pink Floyd", "<p>Pink Floyd is very good heavy metal band</p>", "1414141-Pink-Floyd", "-150", "0", "2023-08-04 11:47:00", "2023-08-04 11:47:00")`,
    );
    await bootstrapDb.sequelize.query(
      `INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("7f58f01f-1438-4a76-b0d4-53faf066eaf0", "568791ce-f07a-46d1-8fc5-49b0ae451f64", "text", "Guns and Roses", "<p>Guns and Roses is very good heavy metal band</p>", "1515151-Guns-and-Roses", "-160", "0", "2023-08-04 11:48:00", "2023-08-04 11:48:00")`,
    );
    await bootstrapDb.sequelize.query(
      `INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("65ed87ad-776e-4755-928b-506d1246d72a", "9d6b17e0-783d-4e6d-b570-5df58c522ff2", "text", "Dream Theater", "<p>Dream Theater very good heavy metal band</p>", "1616161-Dream-Theater", "-170", "0", "2023-08-04 11:49:00", "2023-08-04 11:49:00")`,
    );

    //Usado para testes NÃO MEXER
    await bootstrapDb.sequelize.query(
      ` INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("65ed97ad-776e-4755-928b-506d1246d72a", "9d6b17e0-783d-4e6d-b570-5df58c522ff2", "text", "Dream TeSTer", "<p>Dream Tester very good heavy metal band</p>", "1616161-Dream-TeSTer", "-200", "6", "2023-06-26 00:31:00", "2023-06-26 00:31:00")`,
    );

    //Usado para testes NÃO MEXER
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("65ed97ad-776e-0751-928b-506d1246d72a", "3ded78b6-094e-401c-bf10-df10ee51accf", "bccbecce-6c75-4c52-9603-f277f88bb137","Comentario insert numero 1", "1", "2023-10-27 11:50:00", "2023-10-26 11:50:00")`,
    );

    //Usado para testes NÃO MEXER Até ao próximo comentário
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("65ed97ad-776e-0651-928b-506d1246d72a", "3ded78b6-094e-401c-bf10-df10ee51accf", "bccbecce-6c75-4c52-9603-f277f88bb137","Comentario insert numero 2", "1", "2023-10-27 11:50:00", "2023-10-26 11:50:00")`,
    );

    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("65ed97ad-776e-1751-928b-506d1246d72a", "5a7799d4-dddf-4ae0-ad17-05b6d73fe60b", "af54cf8d-2bc3-4fc2-9529-d69d9d4480ba","Comentario insert numero 1", "1", "2023-06-26 11:50:00", "2023-10-26 11:50:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("65ed97ad-776e-2751-928b-506d1246d72a", "5a7799d4-dddf-4ae0-ad17-05b6d73fe60b", "af54cf8d-2bc3-4fc2-9529-d69d9d4480ba","Comentario insert numero 2", "1", "2023-06-26 11:51:00", "2023-10-26 11:51:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("65ed97ad-776e-3751-928b-506d1246d72a", "5a7799d4-dddf-4ae0-ad17-05b6d73fe60b", "af54cf8d-2bc3-4fc2-9529-d69d9d4480ba","Comentario insert numero 3", "1", "2023-06-26 11:52:00", "2023-10-26 11:52:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("65ed97ad-776e-4751-928b-506d1246d72a", "5a7799d4-dddf-4ae0-ad17-05b6d73fe60b", "af54cf8d-2bc3-4fc2-9529-d69d9d4480ba","Comentario insert numero 4", "1", "2023-06-26 11:53:00", "2023-10-26 11:53:00")`,
    );
    //^______ Usado para testes NÃO MEXER

    await bootstrapDb.sequelize.query(
      `INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("65ed97ad-776e-4751-928b-706d1246d72a", "9d6b17e0-783d-4e6d-b570-5df58c522ff2", "65ed97ad-776e-4755-928b-506d1246d72a","Comentario insert numero 1", "1", "2023-06-26 11:49:00", "2023-10-26 11:49:00")`,
    );
    await bootstrapDb.sequelize.query(
      `  INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("65ed97ad-776e-4751-928b-106d1246d72a", "9d6b17e0-783d-4e6d-b570-5df58c522ff2", "65ed97ad-776e-4755-928b-506d1246d72a","Comentario insert numero 2", "1", "2023-06-26 11:50:00", "2023-10-26 11:50:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("65ed97ad-776e-4751-928b-206d1246d72a", "9d6b17e0-783d-4e6d-b570-5df58c522ff2", "65ed97ad-776e-4755-928b-506d1246d72a","Comentario insert numero 3", "1", "2023-06-26 11:52:00", "2023-10-26 11:52:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("65ed97ad-776e-4751-928b-306d1246d72a", "9d6b17e0-783d-4e6d-b570-5df58c522ff2", "65ed97ad-776e-4755-928b-506d1246d72a","Comentario insert numero 4", "1", "2023-06-26 11:53:00", "2023-10-26 11:53:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("65ed97ad-776e-4751-928b-406d1246d72a", "9d6b17e0-783d-4e6d-b570-5df58c522ff2", "65ed97ad-776e-4755-928b-506d1246d72a","Comentario insert numero 5", "1", "2023-06-26 11:54:00", "2023-10-26 11:54:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("65ed97ad-776e-4751-928b-606d1246d72a", "9d6b17e0-783d-4e6d-b570-5df58c522ff2", "65ed97ad-776e-4755-928b-506d1246d72a","Comentario insert numero 6", "1", "2023-06-26 11:55:00", "2023-10-26 11:55:00")`,
    );
    await bootstrapDb.sequelize.query(
      `INSERT INTO post_vote (post_vote_id, post_id, member_id, type, created_at, updated_at) VALUES ("d2d97243-2cfd-4bf4-b7a5-dbb2e3538be8", "af54cf8d-2bc3-4fc2-9529-d69d9d4480ba", "5a7799d4-dddf-4ae0-ad17-05b6d73fe60b", "UPVOTE", "2023-06-26 11:35:00", "2023-06-26 11:35:00")`,
    );
    await bootstrapDb.sequelize.query(
      `INSERT INTO post_vote (post_vote_id, post_id, member_id, type, created_at, updated_at) VALUES ("9ff93b39-ff75-43bd-892b-9921611d4882", "27246765-204e-4ac0-9c31-39e230bb499b", "a6e313e9-2797-434a-a3d6-c8e2e81eeac2", "UPVOTE", "2023-06-27 11:35:00", "2023-06-27 11:35:00")`,
    );
    await bootstrapDb.sequelize.query(
      `INSERT INTO post_vote (post_vote_id, post_id, member_id, type, created_at, updated_at) VALUES ("302f0c58-6ff5-4cc1-a716-1b000263495d", "9459825f-8c57-4066-9197-550e2f1207b0", "1425c4fb-ef64-4af8-8f35-a11dd0401fcb", "UPVOTE", "2023-06-28 11:35:00", "2023-06-28 11:35:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO post_vote (post_vote_id, post_id, member_id, type, created_at, updated_at) VALUES ("13aef126-18ab-401e-ae02-9953f620bb9f", "72f4a8db-6af8-4e31-b196-7760aa47ae83", "73621c4d-139e-45cb-b3ea-52433283ec5a", "UPVOTE", "2023-06-29 11:35:00", "2023-06-29 11:35:00")`,
    );
    await bootstrapDb.sequelize.query(
      `INSERT INTO post_vote (post_vote_id, post_id, member_id, type, created_at, updated_at) VALUES ("83b178ba-454d-4769-a4ca-7f65f3db190b", "2a641b88-a046-4be9-ae52-9cc2e58653a4", "1a67501a-4f06-4b25-b2aa-6c100fe26cf7", "UPVOTE", "2023-06-30 11:35:00", "2023-06-30 11:35:00")`,
    );

    //Usado para testes NÃO MEXER até ao próximo comentário
    // normal sorting
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("3e5fe8f8-9957-4704-951a-eb66025d247e",	"1a67501a-4f06-4b25-b2aa-6c100fe26cf7", "2a641b88-a046-4be9-ae52-9cc2e58653a4",	"a comment made by RitaCastro",	"1",	"2023-11-13 20:54:13",	"2023-11-13 20:54:13")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("619facfa-4787-46f1-bc2f-1141af4233bc",	"1a67501a-4f06-4b25-b2aa-6c100fe26cf7",	"2a641b88-a046-4be9-ae52-9cc2e58653a4",	"another comment made by RitaCastro",	"1",	"2023-11-13 20:54:00",	"2023-11-13 20:54:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("8ea70f19-69ce-4913-9b5c-397269b9ecbe",	"a6e313e9-2797-434a-a3d6-c8e2e81eeac2",	"27246765-204e-4ac0-9c31-39e230bb499b",	"a comment made by NatalyLucas",	"1",	"2023-11-13 20:51:59",	"2023-11-13 20:51:59")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("b9706d3c-5969-486f-8736-9042114814d2",	"3ded78b6-094e-401c-bf10-df10ee51accf",	"af54cf8d-2bc3-4fc2-9529-d69d9d4480ba",	"a comment made by PauloTeixeira",	"1",	"2023-11-13 20:55:00",	"2023-11-13 20:55:00")`,
    );
    // in case of a full tie
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("619facfa-4787-2145-bc2f-1141af4233bc",	"1a67501a-4f06-4b25-b2aa-6c100fe26cf7",	"2a641b88-a046-4be9-ae52-9cc2e58653a4",	"another comment made by RitaCastro",	"1",	"2023-11-15 20:54:00",	"2023-11-15 20:54:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("8ea70f19-69ce-2351-9b5c-397269b9ecbe",	"a6e313e9-2797-434a-a3d6-c8e2e81eeac2",	"27246765-204e-4ac0-9c31-39e230bb499b",	"a comment made by NatalyLucas",	"1",	"2023-11-15 20:51:59",	"2023-11-15 20:51:59")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("b9706d3c-5969-5521-8736-9042114814d2",	"3ded78b6-094e-401c-bf10-df10ee51accf",	"af54cf8d-2bc3-4fc2-9529-d69d9d4480ba",	"a comment made by PauloTeixeira",	"1",	"2023-11-15 20:55:00",	"2023-11-15 20:55:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("65ed97ad-776e-6434-928b-506d1246d72a", "5a7799d4-dddf-4ae0-ad17-05b6d73fe60b", "af54cf8d-2bc3-4fc2-9529-d69d9d4480ba","a comment by LuisAfonso", "1", "2023-11-15 11:53:00", "2023-11-16 11:53:00")`,
    );
    // in case of a tie in the last two
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("619facfa-4787-9176-bc2f-1141af4233bc",	"1a67501a-4f06-4b25-b2aa-6c100fe26cf7",	"2a641b88-a046-4be9-ae52-9cc2e58653a4",	"another comment made by RitaCastro",	"1",	"2023-11-16 12:20:00",	"2023-11-16 12:20:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("619facfa-4787-1347-bc2f-1141af4233bc",	"1a67501a-4f06-4b25-b2aa-6c100fe26cf7",	"2a641b88-a046-4be9-ae52-9cc2e58653a4",	"another comment made by RitaCastro",	"1",	"2023-11-16 12:20:00",	"2023-11-16 12:20:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("619facfa-4787-1147-bc2f-1141af4233bc",	"1a67501a-4f06-4b25-b2aa-6c100fe26cf7",	"2a641b88-a046-4be9-ae52-9cc2e58653a4",	"another comment made by RitaCastro",	"1",	"2023-11-16 12:20:00",	"2023-11-16 12:20:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("8ea70f19-69ce-6152-9b5c-397269b9ecbe",	"a6e313e9-2797-434a-a3d6-c8e2e81eeac2",	"27246765-204e-4ac0-9c31-39e230bb499b",	"a comment by NatalyLucas",	"1",	"2023-11-16 18:30:16",	"2023-11-16 18:30:16")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("8ea70f19-69ce-7263-9b5c-397269b9ecbe",	"a6e313e9-2797-434a-a3d6-c8e2e81eeac2",	"27246765-204e-4ac0-9c31-39e230bb499b",	"a comment by NatalyLucas",	"1",	"2023-11-16 18:30:16",	"2023-11-16 18:30:16")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("b9706d3c-5969-5328-8736-9042114814d2",	"3ded78b6-094e-401c-bf10-df10ee51accf",	"af54cf8d-2bc3-4fc2-9529-d69d9d4480ba",	"a comment by PauloTeixeira",	"1",	"2023-11-16 20:00:00",	"2023-11-16 20:00:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("65ed97ad-776e-7525-928b-506d1246d72a", "5a7799d4-dddf-4ae0-ad17-05b6d73fe60b", "af54cf8d-2bc3-4fc2-9529-d69d9d4480ba","a comment by LuisAfonso", "1", "2023-11-16 11:53:00", "2023-11-16 11:53:00")`,
    );
    // in case of a tie in the first two
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("619facfa-4787-3892-bc2f-1141af4233bc",	"1a67501a-4f06-4b25-b2aa-6c100fe26cf7",	"2a641b88-a046-4be9-ae52-9cc2e58653a4",	"<p>another comment by rita</p>",	"1",	"2023-11-17 13:23:00",	"2023-11-17 13:23:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("619facfa-4787-7731-bc2f-1141af4233bc",	"1a67501a-4f06-4b25-b2aa-6c100fe26cf7",	"2a641b88-a046-4be9-ae52-9cc2e58653a4",	"<p>another comment by rita</p>",	"1",	"2023-11-17 13:20:00",	"2023-11-17 13:20:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("8ea70f19-69ce-8753-9b5c-397269b9ecbe",	"a6e313e9-2797-434a-a3d6-c8e2e81eeac2",	"27246765-204e-4ac0-9c31-39e230bb499b",	"<p>this is a comment bt natali</p>",	"1",	"2023-11-17 19:30:00",	"2023-11-17 19:30:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("8ea70f19-69ce-2981-9b5c-397269b9ecbe",	"a6e313e9-2797-434a-a3d6-c8e2e81eeac2",	"27246765-204e-4ac0-9c31-39e230bb499b",	"<p>this is a comment bt natali</p>",	"1",	"2023-11-17 11:23:00",	"2023-11-17 11:23:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("b9706d3c-5969-6436-8736-9042114814d2",	"3ded78b6-094e-401c-bf10-df10ee51accf",	"af54cf8d-2bc3-4fc2-9529-d69d9d4480ba",	"<p>use my bootstrap man</p>",	"1",	"2023-11-17 23:00:00",	"2023-11-17 23:00:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO comment (comment_id, member_id, post_id, text, points, created_at, updated_at) VALUES ("65ed97ad-776e-6528-928b-506d1246d72a", "5a7799d4-dddf-4ae0-ad17-05b6d73fe60b", "af54cf8d-2bc3-4fc2-9529-d69d9d4480ba","a comment by LuisAfonso", "1", "2023-11-17 11:53:00", "2023-11-17 11:53:00")`,
    );
    //^__Usado para testes NÃO MEXER

    await bootstrapDb.sequelize.query(
      `INSERT INTO post_vote (post_vote_id, post_id, member_id, type, created_at, updated_at) VALUES ("7a6f2723-e236-4f85-803a-b170a79e91a7", "832182cc-2727-4e92-ac55-2ee476ab4392", "65335bd3-4562-412c-a397-c21e02164ad0", "UPVOTE", "2023-08-04 12:35:00", "2023-08-04 12:35:00")`,
    );
    await bootstrapDb.sequelize.query(
      `INSERT INTO post_vote (post_vote_id, post_id, member_id, type, created_at, updated_at) VALUES ("3134b114-2856-47e7-bb83-99001b9a92f2", "e7248565-4a5a-4a3a-b006-6428922fb4ce", "199ecb0a-e3fb-427e-b572-44d1c74c3e93", "UPVOTE", "2023-08-04 12:36:00", "2023-08-04 12:36:00")`,
    );
    await bootstrapDb.sequelize.query(
      `INSERT INTO post_vote (post_vote_id, post_id, member_id, type, created_at, updated_at) VALUES ("c90f1415-5851-4178-9d61-85469c7f7390", "3d9d5d32-88d0-4caa-a5eb-2619f9462896", "e5840f10-3426-4bd2-b937-5fcebd7c8734", "DOWNVOTE", "2023-08-04 12:37:00", "2023-08-04 12:37:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO post_vote (post_vote_id, post_id, member_id, type, created_at, updated_at) VALUES ("b875e745-b18a-4046-a65f-bf0e9e89ec92", "304d5955-58e5-4a72-9780-1cc8877940ca", "d78afee0-c240-4494-8ed3-45c02d86839c", "DOWNVOTE", "2023-08-04 12:38:00", "2023-08-04 12:38:00")`,
    );
    await bootstrapDb.sequelize.query(
      `INSERT INTO post_vote (post_vote_id, post_id, member_id, type, created_at, updated_at) VALUES ("c3a8f8d6-05f1-46b4-b167-86b1b93633d6", "b12cf3ae-8ae6-4fe9-a603-04e5da3394bb", "1e6fa417-9811-4f07-b685-b999198db383", "DOWNVOTE", "2023-08-04 12:39:00", "2023-08-04 12:39:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO post_vote (post_vote_id, post_id, member_id, type, created_at, updated_at) VALUES ("ea7cb5d6-b926-4346-ba1e-9f02831627de", "2aa2880f-6e1f-4bed-a28b-490aae310774", "d67596d3-5810-45d5-9ac4-74c9954bd514", "DOWNVOTE", "2023-08-04 12:40:00", "2023-08-04 12:40:00")`,
    );

    //Usado para testes US016 - Average Posts (7 posts  and 2 users)
    await bootstrapDb.sequelize.query(
      `INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("3d9d5d32-11d0-4caa-a5eb-2619f9322896", "e5840f10-3426-4bd2-b937-5fcebd7c8734", "text", "Average of Posts 1", "<p>Average of posts per day number 1</p>", "5236548-Average-of-Posts-1", "110", "0", "2023-11-11 11:43:00", "2023-11-11 11:43:00")`,
    );
    await bootstrapDb.sequelize.query(
      `INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("3d9d5d32-12d0-4caa-a5eb-2619f9332896", "e5840f10-3426-4bd2-b937-5fcebd7c8734", "text", "Average of Posts 2", "<p>Average of posts per day number 2</p>", "5236549-Average-of-Posts-2", "111", "0", "2023-11-11 11:45:00", "2023-11-11 11:45:00")`,
    );
    await bootstrapDb.sequelize.query(
      `INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("3d9d5d32-13d0-4caa-a5eb-2619f9342896", "e5840f10-3426-4bd2-b937-5fcebd7c8734", "text", "Average of Posts 3", "<p>Average of posts per day number 3</p>", "5236550-Average-of-Posts-3", "112", "0", "2023-11-11 11:46:00", "2023-11-11 11:46:00")`,
    );
    await bootstrapDb.sequelize.query(
      `INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("3d9d5d32-14d0-4caa-a5eb-2619f9352896", "e5840f10-3426-4bd2-b937-5fcebd7c8734", "text", "Average of Posts 4", "<p>Average of posts per day number 4</p>", "5236551-Average-of-Posts-4", "113", "0", "2023-11-11 11:47:00", "2023-11-11 11:47:00")`,
    );
    await bootstrapDb.sequelize.query(
      `INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("304d5955-15d0-4a72-9780-1cc8877940ca", "d78afee0-c240-4494-8ed3-45c02d86839c", "text", "Average of Posts 5", "<p>Average of posts per day number 5</p>", "5236552-Average-of-Posts-5", "114", "0", "2023-11-11 11:48:00", "2023-11-11 11:48:00")`,
    );
    await bootstrapDb.sequelize.query(
      `INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("304d5955-16d0-4a72-9780-1cc8877940ca", "d78afee0-c240-4494-8ed3-45c02d86839c", "text", "Average of Posts 6", "<p>Average of posts per day number 6</p>", "5236553-Average-of-Posts-6", "115", "0", "2023-11-11 11:49:00", "2023-11-11 11:49:00")`,
    );
    await bootstrapDb.sequelize.query(
      `INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("304d5955-17d0-4a72-9780-1cc8877940ca", "d78afee0-c240-4494-8ed3-45c02d86839c", "text", "Average of Posts 7", "<p>Average of posts per day number 7</p>", "5236554-Average-of-Posts-7", "116", "0", "2023-11-11 11:50:00", "2023-11-11 11:50:00")`,
    );

    await bootstrapDb.sequelize.query(
      `INSERT INTO post_vote (post_vote_id, post_id, member_id, type, created_at, updated_at) VALUES ("08059ec4-19c1-4a6a-b0c1-2f5bd05c1d49", "a5847739-aa0a-45d8-999e-5b75b643135e", "4c250dba-e672-4a9c-ae7c-f8f7cc5dfc09", "DOWNVOTE", "2023-08-04 12:41:00", "2023-08-04 12:41:00")`,
    );
    await bootstrapDb.sequelize.query(
      `INSERT INTO post_vote (post_vote_id, post_id, member_id, type, created_at, updated_at) VALUES ("de910c09-32d0-46b7-8848-0afdbbdedcba", "7f58f01f-1438-4a76-b0d4-53faf066eaf0", "568791ce-f07a-46d1-8fc5-49b0ae451f64", "DOWNVOTE", "2023-08-04 12:42:00", "2023-08-04 12:42:00")`,
    );
    await bootstrapDb.sequelize.query(
      `INSERT INTO post_vote (post_vote_id, post_id, member_id, type, created_at, updated_at) VALUES ("a654eb87-8e38-491c-979a-0d807469293a", "65ed87ad-776e-4755-928b-506d1246d72a", "9d6b17e0-783d-4e6d-b570-5df58c522ff2", "DOWNVOTE", "2023-08-04 12:43:00", "2023-08-04 12:43:00")`,
    );
    return 'OK';
  }

  public async acceptanceBootrapSetup(): Promise<void> {
    const bootstrapDb = this.models.Comment;

    await bootstrapDb.sequelize.query(
      `INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES
      ("a1f21a1e-c63a-4f35-b79e-2a8a5c70fbc1", "newmember@example.com", "NewMember", "$2a$12$hashedPasswordHere", "2023-11-26 15:30:00", "2023-11-26 15:30:00")`,
    );

    await bootstrapDb.sequelize.query(
      `INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES
      ("b2e36c14-4b2d-4a55-8ed5-2c30896ec8ac", "a1f21a1e-c63a-4f35-b79e-2a8a5c70fbc1", 0, "2023-11-26 15:30:00", "2023-11-26 15:30:00")`,
    );

    await bootstrapDb.sequelize.query(
      `INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES
      ("c3b35aa7-372a-47f0-82b3-4ef84ce8f905", "b2e36c14-4b2d-4a55-8ed5-2c30896ec8ac", "text", "New Member's Post", "<p>This is a new member's post content.</p>", "new-members-post", "10", "2", "${this.getDateAgo(
        1,
      )}", "${this.getDateAgo(1)}")`,
    );

    await bootstrapDb.sequelize.query(
      `INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES
      ("c4d17ac8-9131-4b21-8ed0-1a2d9a1ea22c", "b2e36c14-4b2d-4a55-8ed5-2c30896ec8ac", "text", "Another Post", "<p>This is another post content.</p>", "another-post", "8", "3", "${this.getDateAgo(
        5,
      )}", "${this.getDateAgo(5)}")`,
    );
    await bootstrapDb.sequelize.query(
      `INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES
      ("c4d17ac8-9131-4b21-8ed0-2a2d9a1ea22c", "b2e36c14-4b2d-4a55-8ed5-2c30896ec8ac", "text", "Another one who bites the Post", "<p>Another one who bites the Post.</p>", "another-post", "8", "3", "${this.getDateAgo(
        6,
      )}", "${this.getDateAgo(6)}")`,
    );
  }

  public async deleteUserTest(): Promise<void> {
    const bootstrapDb = this.models.Comment;
    await bootstrapDb.sequelize.query(
      ` INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("4370b417-413e-4915-baa5-495f3b9e3d5f", "nunopinto@dddforum.com", "NunoPinto", "$2a$12$wUHyIEjMkAb1PsqdRaFv0u7x9/rh99rOz.Kr6We9LRLMpICdXVfVa", "2023-06-28 11:00:00", "2023-06-28 11:00:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("1425c4fb-ef64-4af8-8f35-a11dd0401fcb", "4370b417-413e-4915-baa5-495f3b9e3d5f", 0, "2023-06-28 11:00:00", "2023-06-28 11:00:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO post (post_id, member_id, type, title, text, slug, points, total_num_comments, created_at, updated_at) VALUES ("9459825f-8c57-4066-9197-550e2f1207b0", "1425c4fb-ef64-4af8-8f35-a11dd0401fcb", "text", "PlantUML", "<p>More info here https://plantuml.com/</p>", "3333333-PlantUML", "85", "0", "2023-06-28 11:30:00", "2023-06-28 11:30:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("b623fb22-c6b5-4ab6-9e68-ced0b0e1aae0", "joaonabica@dddforum.com", "JoaoNabica", "$2a$12$z1ZNEOe4wqidrWvU5PDEa.Arabowqy22dQKGUBwG0RAqSmFNUhS.i", "2023-08-04 10:21:00", "2023-08-04 10:21:00")`,
    );
    await bootstrapDb.sequelize.query(
      ` INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("d78afee0-c240-4494-8ed3-45c02d86839c", "b623fb22-c6b5-4ab6-9e68-ced0b0e1aae0", 0, "2023-08-04 10:21:00", "2023-08-04 10:21:00")`,
    );
  }

  getDateAgo(daysAgo): string {
    const today = new Date();
    const numDaysAgo = new Date(today);
    numDaysAgo.setDate(today.getDate() - daysAgo);

    const formattedDate = format(numDaysAgo, 'yyyy-MM-dd HH:mm:ss');
    return formattedDate;
  }
}
