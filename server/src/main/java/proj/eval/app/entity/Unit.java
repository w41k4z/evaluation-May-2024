package proj.eval.app.entity;

import lombok.Getter;
import lombok.Setter;
import proj.w41k4z.orm.annotation.Column;
import proj.w41k4z.orm.annotation.Entity;
import proj.w41k4z.orm.annotation.Id;
import proj.w41k4z.orm.database.Repository;

@Getter
@Setter
@Entity(table = "units")
public class Unit extends Repository<Unit, Long> {

  @Id
  @Column
  private Long id;

  @Column
  private String name;
}
